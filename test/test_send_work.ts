import {TravoyEnum, TravoyService} from "../lib/travoy_service";
import {GoogleMapsClient} from "../lib/google_maps_client";
import {TelegramBot} from "../lib/telegram_bot";

function TestSendWork() {
    const token = PropertiesService.getScriptProperties().getProperty("telegram_bot_token")
    const testChatId = PropertiesService.getScriptProperties().getProperty("telegram_bot_test_chat_id")
    const bot = new TelegramBot(token ?? "")
    const origin = PropertiesService.getScriptProperties().getProperty("origin_work")
    const dest = PropertiesService.getScriptProperties().getProperty("dest_work")
    const today = new Date()
    const mapsToken = PropertiesService.getScriptProperties().getProperty("maps_token")
    const travoyEnumStr = PropertiesService.getScriptProperties().getProperty("travoy_enums")
    const travoyEnums: TravoyEnum[] = JSON.parse(travoyEnumStr ?? "")

    const client = new GoogleMapsClient(mapsToken ?? "")
    const resGone = client.getTimeEstimate(origin ?? "", dest ?? "", today.getTime().toString())

    const resComeBack = client.getTimeEstimate(dest ?? "", origin ?? "", today.getTime().toString())

    bot.sendMessage(Number(testChatId), `Current prediction for if going ${JSON.stringify(resGone)} and if coming back ${JSON.stringify(resComeBack)}`)

    for (const id of travoyEnums) {
        const screenshot = TravoyService.getImageFromCCTV(id)
        bot.sendPhoto(Number(testChatId), screenshot, id)
    }

    return "success"
}