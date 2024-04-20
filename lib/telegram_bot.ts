import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;
import {TelegramSendMessageResponse} from "../interface/telegram_send_message_response";
import {TelegramSendPhotoResponse} from "../interface/telegram_send_photo_response";

export class TelegramBot {
    botSecret: string

    constructor(botSecret: string) {
        this.botSecret = botSecret
    }

    // url = https://telegram-bot-sdk.readme.io/reference/sendmessage
    sendMessage(chatId: number, message: string) {
        const url = `https://api.telegram.org/bot${this.botSecret}/sendMessage`
        const params: URLFetchRequestOptions = {
            method: 'post',
            payload: {
                chat_id: String(chatId),
                text: message
            },
        }
        const res = UrlFetchApp.fetch(url, params)
        return JSON.parse(res.getContentText()) as TelegramSendMessageResponse
    }

    // url = https://telegram-bot-sdk.readme.io/reference/sendphoto
    sendPhoto(chatId: number, photo: string | GoogleAppsScript.Base.Blob, caption?: string) {
        const url = `https://api.telegram.org/bot${this.botSecret}/sendPhoto`
        const params: URLFetchRequestOptions = {
            method: 'post',
            payload: {
                chat_id: String(chatId),
                photo: photo,
                caption,
            },
        }
        const res = UrlFetchApp.fetch(url, params)
        return JSON.parse(res.getContentText()) as TelegramSendPhotoResponse
    }
}