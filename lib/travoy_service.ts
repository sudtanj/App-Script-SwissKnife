import {ScreenshotService} from "./screenshot_service";

export enum TravoyEnum {
    JORR_W2S_KM_18_000 = "JORR_W2S_KM_18_000"
}

export class TravoyService {
    static cctv_list = {
        [TravoyEnum.JORR_W2S_KM_18_000]: "https://jid.jasamarga.com/cctv2/24efe36?tx=1712630101807"
    }

    static getCCTVLink(id: TravoyEnum) {
        return TravoyService.cctv_list[id]
    }

    static getScreenshotOfCCTV(id: TravoyEnum) {
        const url = TravoyService.getCCTVLink(id)
        return ScreenshotService.takeAsUrl(url, id, 1024, 768, 352, 288)
    }

    static getImageFromCCTV(id: TravoyEnum) {
        const url = TravoyService.getCCTVLink(id)
        return UrlFetchApp.fetch(url).getBlob()
    }
}