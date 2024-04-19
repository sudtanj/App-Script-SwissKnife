export class GOGHelper {
    static parseAndFindTokenFromMail(message: string): [string, Error | null] {
        const regex = /Your two-step security code: ([0-9]+)/i
        const matches = message.match(regex)
        if (!matches) {
            return ["", new Error("invalid matches")]
        }
        return [matches[1], null]
    }
}