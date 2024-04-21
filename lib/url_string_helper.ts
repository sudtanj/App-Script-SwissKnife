export class UrlStringHelper{
    static addQuery (url: string, obj: { [key: string]: string | number | boolean }) {
        return (url == "" ? "" : `${url}?`) + Object.entries(obj).flatMap(([k, v]) => Array.isArray(v) ? v.map(e => `${k}=${encodeURIComponent(e)}`) : `${k}=${encodeURIComponent(v)}`).join("&");
    }
}