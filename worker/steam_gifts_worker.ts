import {SteamGiftsLib} from "../lib/steam_gifts_lib";
import {TimeUtils} from "../lib/time_utils";

export async function run_steam_gifts_worker() {
    const steamGiftToken = PropertiesService.getScriptProperties().getProperty("steam_gifts_token")
    const lib = new SteamGiftsLib(steamGiftToken)
    lib.fetchHTMLByPage(1)
    lib.parseCurrentPoint()
    lib.parseXSRFToken()
    const codes = lib.getGiveawayList()
    for (const code of codes) {
        const res = lib.joinGiveaway(code)
        if (res.type != "success" || lib.currentPoint < 5) {
            break
        }
        Logger.log("success join code " + code)
        await TimeUtils.sleepRandBetween(1000, 10000)
    }
    Logger.log("system stopped!")
}