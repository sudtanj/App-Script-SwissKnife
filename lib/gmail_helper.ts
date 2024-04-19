export class GmailHelper {
    static findLatestGOG2FAAuthTokenMessage() {
        // const query =  'is:unread from:(no-reply@email.gog.com) subject:(Two-step authentication)';
        const query =  'from:(no-reply@email.gog.com) subject:(Two-step authentication)';
        const threads = GmailApp.search(query)
        const messages = threads[0].getMessages()
        return messages[messages.length - 1]
    }
}