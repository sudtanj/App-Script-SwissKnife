export interface ScreendotResponse {
    id: string
    url: string
    size: number
    image: Image
    browser: Browser
}

interface Image {
    format: string
    width: any
    height: number
}

interface Browser {
    width: number
    height: number
}
