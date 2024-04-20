export class ScreenshotService {

    static getServiceUrl(url: string) {
        return `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
            url
        )}&fields=${encodeURIComponent("lighthouseResult")}`;
    }

    static take(url: string, outputFileName: string) {
        const serviceUrl = ScreenshotService.getServiceUrl(url);
        const res = UrlFetchApp.fetch(serviceUrl, {
            muteHttpExceptions: true,
            headers: { authorization: "Bearer " + ScriptApp.getOAuthToken() },
        }).getContentText();
        const obj = JSON.parse(res);
        const base64 = obj["lighthouseResult"]["audits"]["final-screenshot"][
            "details"
            ]["data"]
            .split(",")
            .pop();
        return Utilities.newBlob(
            Utilities.base64Decode(base64),
            "image/png",
            outputFileName
        )
    }
}