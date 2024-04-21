import {TelegramWebhookPayload} from "../interface/telegram_webhook_payload";
import {TelegramBot} from "../lib/telegram_bot";
import {TravoyEnum, TravoyService} from "../lib/travoy_service";
import {GoogleMapsClient} from "../lib/google_maps_client";

export enum TelegramCommandEnum {
    TIME = "time",
    TEST_SCREENSHOT = "test-ss",
    WORK_TRAFFIC = "work",
}

export class TelegramHandler {
    bot: TelegramBot
    data: TelegramWebhookPayload

    constructor(data: TelegramWebhookPayload, token: string) {
        this.bot = new TelegramBot(token)
        this.data = data
    }

    process() {
        const msg = this.data.message.text
        switch (msg) {
            case TelegramCommandEnum.TIME:
                return this.handleGetCurrentTime()
            case TelegramCommandEnum.TEST_SCREENSHOT:
                return this.handleTestScreenshot()
            case TelegramCommandEnum.WORK_TRAFFIC:
                return this.handlePredictWorkTraffic()
            default:
                return this.handleUnknownCommand()
        }
    }

    handlePredictWorkTraffic() {
        const origin = PropertiesService.getScriptProperties().getProperty("origin_work")
        const dest = PropertiesService.getScriptProperties().getProperty("dest_work")
        const today = new Date()
        const mapsToken = PropertiesService.getScriptProperties().getProperty("maps_token")
        const travoyEnumStr = PropertiesService.getScriptProperties().getProperty("travoy_enums")
        const travoyEnums: TravoyEnum[] = JSON.parse(travoyEnumStr ?? "")

        const client = new GoogleMapsClient(mapsToken ?? "")
        const resGone = client.getTimeEstimate(origin ?? "", dest ?? "", today.toString())

        const resComeBack = client.getTimeEstimate(dest ?? "", origin ?? "", today.toString())

        this.bot.sendMessage(this.data.message.chat.id, `Current prediction for if going ${JSON.stringify(resGone)} and if coming back ${JSON.stringify(resComeBack)}`)

        for (const id of travoyEnums) {
            const screenshot = TravoyService.getImageFromCCTV(id)
            this.bot.sendPhoto(this.data.message.chat.id, screenshot, id)
        }

        return "success"
    }

    handleGetCurrentTime() {
        this.bot.sendMessage(this.data.message.chat.id, new Date().toISOString())

        return "success"
    }

    handleTestScreenshot() {
        const screenshot = TravoyService.getImageFromCCTV(TravoyEnum.JORR_W2S_KM_18_000)
        this.bot.sendPhoto(this.data.message.chat.id, screenshot, TravoyEnum.JORR_W2S_KM_18_000)

        return 'success'
    }

    handleUnknownCommand() {
        const chatId = this.data.message.chat.id
        const msg = `unknown comamnd!`
        this.bot.sendMessage(chatId, msg)

        return 'success'
    }
}