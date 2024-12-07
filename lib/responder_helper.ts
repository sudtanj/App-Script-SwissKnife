import {ApiResponse} from "../interface/api_response";

/**
 * Helper class for sending HTTP responses in a consistent and secure manner.
 */
export class ResponderHelper {
    /**
     * Sends a success response (HTTP 200 OK).
     *
     * @param data The data to include in the response body.
     * @returns A Google Apps Script TextOutput object representing the HTTP response.
     */
    static sendSuccess(data: any): GoogleAppsScript.Content.TextOutput {
        const respond: ApiResponse = {
            status: 200,
            message: "success",
            data: data
        };
        return ContentService.createTextOutput(JSON.stringify(respond)).setMimeType(ContentService.MimeType.JSON);
    }

    /**
     * Sends a Not Found response (HTTP 404 Not Found).
     *
     * @param data Optional data to provide context about the error (e.g., a specific message).
     * @returns A Google Apps Script TextOutput object representing the HTTP response.
     */
    static sendNotFound(data: any): GoogleAppsScript.Content.TextOutput {  // Parameter remains the same
        const respond: ApiResponse = {
            status: 404,
            message: "not found",
            data: data || null // Provide a default value for data if it's undefined or null
        };
        return ContentService.createTextOutput(JSON.stringify(respond)).setMimeType(ContentService.MimeType.JSON);
    }

    /**
     * Sends an Unauthorized response (HTTP 401 Unauthorized).
     *
     * @param data Optional data to provide context about the authorization failure (e.g., "Invalid token").
     * @returns A Google Apps Script TextOutput object representing the HTTP response.
     */
    static sendUnauthorized(data: any): GoogleAppsScript.Content.TextOutput { // Parameter remains the same
        const respond: ApiResponse = {
            status: 401,
            message: "unauthorized",
            data: data || null // Provide a default value for data if it's undefined or null
        };
        return ContentService.createTextOutput(JSON.stringify(respond)).setMimeType(ContentService.MimeType.JSON);
    }
}
