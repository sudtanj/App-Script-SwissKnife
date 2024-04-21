import {TravoyEnum, TravoyService} from "../lib/travoy_service";
import {TelegramBot} from "../lib/telegram_bot";

function TestGetImageFromCCTV() {
    const res = TravoyService.getImageFromCCTV(TravoyEnum.JORR_W2S_KM_18_000)
    const token = PropertiesService.getScriptProperties().getProperty("telegram_bot_token")
    const testChatId = PropertiesService.getScriptProperties().getProperty("telegram_bot_test_chat_id")
    const bot = new TelegramBot(token ?? "")
    bot.sendPhoto(Number(testChatId), res)
    console.log(res)
}