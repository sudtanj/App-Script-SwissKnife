/**
 * The structure of the response returned by Zapier.
 */
export interface ZapierResponse {
    attempt: string;
    id: string;
    request_id: string;
    status: "success" | "failure";
}

/**
 * A utility class for sending POST requests to Zapier webhooks.
 */
export class ZapierWebhook {

    /**
     * Sends a POST request to a Zapier webhook URL.
     * @param {string} webhookUrl - The Zapier webhook URL.
     * @param {T} payload - The data to send to the Zapier webhook.
     * @returns {ZapierResponse} The response from the Zapier server.
     * @throws {Error} If the webhookUrl or payload is invalid, or if the request fails.
     */
    static sendToZapier<T>(webhookUrl: string, payload: T): ZapierResponse {
        if (!webhookUrl || !payload) {
            throw new Error("Webhook URL and payload are required.");
        }

        const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
            method: "post",
            contentType: "application/json",
            payload: JSON.stringify(payload),
        };

        try {
            const response = UrlFetchApp.fetch(webhookUrl, options);
            return JSON.parse(response.getContentText()) as ZapierResponse;
        } catch (err: any) {
            throw new Error(`Failed to send data to Zapier: ${err.message}`);
        }
    }
}
