export interface TelegramSendPhotoResponse {
    ok: boolean
    result: Result
}

interface Result {
    message_id: number
    from: From
    chat: Chat
    date: number
    photo: Photo[]
    caption: string
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

interface Photo {
    file_id: string
    file_unique_id: string
    file_size: number
    width: number
    height: number
}
