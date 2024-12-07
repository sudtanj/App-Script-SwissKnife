/**
 * steam_gifts_lib.ts
 * 
 * This library provides functionality to interact with the SteamGifts website.
 * It includes methods to fetch HTML pages, parse XSRF tokens, get giveaway lists,
 * parse current points, and join giveaways.
 * 
 * Usage:
 * const steamGifts = new SteamGiftsLib('your_cookie_id');
 * steamGifts.fetchHTMLByPage(1);
 * steamGifts.parseXSRFToken();
 * const giveaways = steamGifts.getGiveawayList();
 * const points = steamGifts.parseCurrentPoint();
 * const response = steamGifts.joinGiveaway('giveaway_code');
 */

import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;
import HttpHeaders = GoogleAppsScript.URL_Fetch.HttpHeaders;
import {UrlFetchAppHelper} from "./url_fetch_app_helper";

export interface JoinGiveawayPayload {
    xsrf_token: string
    do: 'entry_insert'
    code: string
}

export interface JoinGiveawayResponse {
    type: "success"
    entry_count: string
    points: string
}

export class SteamGiftsLib {
    // constant properties
    URL = 'https://www.steamgifts.com'

    // properties
    cookieId: string
    xsrfToken?: string
    currentPoint?: number
    cacheHtml?: string

    constructor(cookieId: string) {
        if (typeof cookieId != "string" || cookieId.length <= 0) {
           throw new Error("missing cookie id")
        }
        this.cookieId = cookieId
    }

    getHeader(): HttpHeaders {
        return {
            'User-Agent': 'Mozilla/5.0 (X11; Fedora; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-encoding': 'gzip, deflate',
            'Connection': 'keep-alive',
            'Cookie' : this.cookieId,
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }

    fetchHTMLByPage(page: number): string {
        const params: URLFetchRequestOptions = {
            headers: this.getHeader()
        }
        const url = this.getPagingUrl(page)
        const res = UrlFetchApp.fetch(url, params).getContentText();
        this.cacheHtml = res
        return res
    }

    parseXSRFToken() {
        const htmlData = this.cacheHtml
        if (!htmlData) {
            throw new Error("fetch html first!")
        }
        const res = htmlData.match(new RegExp(`name="xsrf_token" value="([0-9a-zA-Z]*?)"`,"i"))
        Logger.log("matched xsrf token " + res)
        if (!res || res?.length < 2) {
            throw new Error("XSRF not found!")
        }
        Logger.log("get xsrf token " + res[1])
        this.xsrfToken = res[1]
        return res[1]
    }

    getPagingUrl(page: number): string {
        return `${this.URL}/giveaways/search?page=${page}`;
    }

    getGiveawayList() {
        const regex = /href="\/giveaway\/([a-zA-Z0-9]*?)\/[^\/]*?">([^<>]*)</g;
        const res: Set<string> = new Set();

        const htmlData = this.cacheHtml ?? ""

        let match;
        while ((match = regex.exec(htmlData)) !== null) {
            const [, code] = match; // Extract the code from the capturing group
            res.add(code);
        }

        return Array.from(res); // Convert Set back to an array
    }

    parseCurrentPoint(): number {
        const regex = /<span class="nav__points">([0-9]+)<\/span>/i;
        const htmlData = this.cacheHtml
        if (!htmlData) {
            throw new Error("fetch html first!")
        }
        const match = htmlData.match(regex);
        if (match) {
            this.currentPoint = Number(match[1])
            return Number(match[1]);
        }
        throw new Error("Points not found!");
    }

    joinGiveaway(code: string) {
        const body: JoinGiveawayPayload = {
            xsrf_token: this.xsrfToken ?? "",
            code,
            do: "entry_insert",
        }
        const params: URLFetchRequestOptions = {
            headers: this.getHeader(),
            method: 'post',
            payload: body,
        }
        const url = this.URL + '/ajax.php'
        Logger.log("params " + JSON.stringify(params))
        const resp = UrlFetchAppHelper.fetchAsObject<JoinGiveawayResponse>(url, params)
        this.currentPoint = Number(resp.points)
        return resp
    }
}
