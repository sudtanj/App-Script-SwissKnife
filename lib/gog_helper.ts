export class GOGHelper {
    static parseAndFindTokenFromMail(message: string) {
        const regex = /Your two-step security code: ([0-9]+)/i
        const matches = message.match(regex)
        if (!matches) {
            throw new Error("invalid text")
        }
        return matches[1]
    }
}