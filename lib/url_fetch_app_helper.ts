import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;

export class UrlFetchAppHelper {
    static fetchAsObject<T extends any>(url: string, params: URLFetchRequestOptions): T {
        const respTxt = UrlFetchApp.fetch(url, params).getContentText();
        try {
            const res = JSON.parse(respTxt) as T
            return res
        } catch (e) {
            Logger.log(`unable to parse json, response ${respTxt}`)
            return respTxt as T
        }
    }
}