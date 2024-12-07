import { UrlFetchAppHelper } from "./url_fetch_app_helper";

/**
 * This class provides a convenient way to interact with the CallMeBot WhatsApp API
 * for sending text messages.
 *
 * **Important Notes:**
 * - This script utilizes the free tier of CallMeBot API, which might have limitations on
 *   message frequency and functionality. Refer to their documentation for details:
 *   https://www.callmebot.com/blog/free-api-whatsapp-messages/
 * - Make sure your Google Apps Script project has the necessary permissions (like UrlFetch) enabled.
 */
export class CallMeBotWhatsAppAPI {
    /**
     * Sends a WhatsApp text message to the provided phone number.
     *
     * @param message The text message to be sent.
     * @throws Error if the API key is not found in script properties or an error occurs during the API request.
     */
    public static async sendMessage(message: string): Promise<void> {
        // get api key from properties services
        const apiKey = PropertiesService.getScriptProperties().getProperty('call_me_bot_api_key');
        if (!apiKey) {
            throw new Error('API key not found in script properties. Please set the "call_me_bot_api_key" property.');
        }

        // get phone number from properties services
        const targetPhoneNumber = PropertiesService.getScriptProperties().getProperty('call_me_bot_target_phone');
        if (!targetPhoneNumber) {
            throw new Error('Target phone number not found in script properties. Please set the "call_me_bot_target_phone" property.');
        }

        const url = `https://api.callmebot.com/whatsapp.php?phone=${targetPhoneNumber}&text=${message}&apikey=${apiKey}`;

        try {
            const [response, err] = await UrlFetchAppHelper.fetchAsObject<any>(url, {});
            Logger.log(`Call Me Bot Whatsapp Response Body = ${response}`)
            if (!response.ok || err) {
                throw new Error(`Error sending message: ${response.statusText}`);
            }
            console.log('Message sent successfully!');
        } catch (error) {
            console.error('Error sending message:', error);
            throw error;
        }
    }
}
