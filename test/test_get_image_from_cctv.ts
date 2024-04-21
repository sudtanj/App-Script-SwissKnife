import {TravoyEnum, TravoyService} from "../lib/travoy_service";

function TestGetImageFromCCTV() {
    const res = TravoyService.getImageFromCCTV(TravoyEnum.JORR_W2S_KM_18_000)
    console.log(res)
}