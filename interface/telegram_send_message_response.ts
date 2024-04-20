export interface TelegramSendMessageResponse {
    ok: boolean
    result: Result
}

interface Result {
    message_id: number
    from: From
    chat: Chat
    date: number
    text: string
}

interface From {
    id: number
    is_bot: boolean
    first_name: string
    username: string
}

interface Chat {
    id: number
    first_name: string
    username: string
    type: string
}
