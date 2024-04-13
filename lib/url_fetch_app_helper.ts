import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;

export class UrlFetchAppHelper {
    static fetchAsObject<T extends any>(url: string, params: URLFetchRequestOptions): T {
        const respTxt = UrlFetchApp.fetch(url, params).getContentText();
        return JSON.parse(respTxt) as T
    }
}