import {TelegramWebhookPayload} from "../interface/telegram_webhook_payload";
import {TelegramBot} from "../lib/telegram_bot";
import {ScreenshotService} from "../lib/screenshot_service";

export enum TelegramCommandEnum {
    TIME = "time",
    TEST_SCREENSHOT = "test-ss"
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
            default:
                return this.handleUnknownCommand()
        }
    }

    handleGetCurrentTime() {
        this.bot.sendMessage(this.data.message.chat.id, new Date().toISOString())

        return "success"
    }

    handleTestScreenshot() {
        const screenshot = ScreenshotService.take("http://detik.com", "detik")
        this.bot.sendPhoto(this.data.message.chat.id, screenshot, "test")

        return 'success'
    }

    handleUnknownCommand() {
        const chatId = this.data.message.chat.id
        const msg = `unknown comamnd!`
        this.bot.sendMessage(chatId, msg)

        return 'success'
    }
}