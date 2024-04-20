import {TelegramWebhookPayload} from "../interface/telegram_webhook_payload";
import {TelegramBot} from "../lib/telegram_bot";

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
            case "time":
                return this.getCurrentTime()
            default:
                return "unknown command!"
        }
    }

    getCurrentTime() {
        this.bot.sendMessage(this.data.message.chat.id, new Date().toISOString())

        return "success"
    }
}