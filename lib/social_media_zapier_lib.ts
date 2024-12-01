import {ZapierWebhook,ZapierResponse} from "./zapier_lib";

/**
 * The structure of the LinkedIn payload.
 */
export interface SocialMediaPayload {
    token: string;
    title: string;
    body: string;
    imageUrl: string;
    link: string;
}

/**
 * A utility class for triggering LinkedIn-related actions using the Zapier webhook.
 */
export class SocialMediaZapierCall {


    /**
     * Sends a social media post payload to the Zapier webhook via the ZapierWebhook library.
     * @param {string} webhookUrl - The Zapier webhook URL.
     * @param {SocialMediaPayload} payload - The LinkedIn post payload to send.
     * @returns {ZapierWebhook.ZapierResponse} The response from the Zapier webhook.
     * @throws {Error} If an error occurs while calling the Zapier webhook.
     */
    static triggerSocialMediaPost(webhookUrl: string, payload: SocialMediaPayload): ZapierResponse {
        if (!webhookUrl || !payload) {
            throw new Error("Webhook URL and payload are required.");
        }

        try {
            return ZapierWebhook.sendToZapier<SocialMediaPayload>(webhookUrl, payload);
        } catch (error: any) {
            throw new Error(`Failed to trigger LinkedIn post via Zapier: ${error.message}`);
        }
    }
}
