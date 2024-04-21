import {UrlFetchAppHelper} from "./url_fetch_app_helper";
import {ScreendotResponse} from "../interface/screendot_response";

export class ScreenshotService {

    static token = PropertiesService.getScriptProperties().getProperty("screendot_token")

    static getServiceUrl(url: string, width?: number, height?: number, browserWidth?: number, browserHeight?: number) {
        const urlRes = new URL(`https://screendot.io/api/standard?response=json`)
        if (width && height) {
            urlRes.searchParams.set("width", String(width))
            urlRes.searchParams.set("height", String(height))
        }

        if (browserWidth && browserHeight) {
            urlRes.searchParams.set("browserWidth", String(browserWidth))
            urlRes.searchParams.set("browserHeight", String(browserHeight))
        }

        urlRes.searchParams.set("url", url)

        return urlRes
    }

    static takeAsUrl(url: string, outputFileName: string, width?: number, height?: number, browserWidth?: number, browserHeight?: number) {
        const serviceUrl = ScreenshotService.getServiceUrl(url, width, height, browserWidth, browserHeight);
        const res = UrlFetchAppHelper.fetchAsObject<ScreendotResponse>(serviceUrl.toString(), {
            headers: { authorization: "Bearer " + ScreenshotService.token ?? "" },
        });
        return res.url
    }
}