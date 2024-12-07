import {SocialMediaZapierCall} from "./social_media_zapier_lib";
import {TimeUtils} from "./time_utils";

/**
 * Payload interface for social media auto-posting.
 */
export interface SocialMediaAutoPayload {
    /**
     * The title of the post.
     */
    title: string;
    /**
     * The body of the post.
     */
    body: string;
    /**
     * The URL of the image to be posted.
     */
    imageUrl: string;
    /**
     * The link to be shared.
     */
    link: string;
}

/**
 * Class responsible for auto-posting to social media platforms.
 */
export class SocialMediaAutoPost {
    /**
     * Triggers the auto-posting process.
     * @param payload The payload to be posted.
     */
    static run(payload: SocialMediaAutoPayload) {
        // Retrieve the LinkedIn Zapier token from script properties.
        const token = PropertiesService.getScriptProperties().getProperty("linkedin_zapier_token")
        if (!token) {
            // Log an error if the token is invalid.
            Logger.log("invalid token")
            return
        }

        // Retrieve the LinkedIn WebHook URL from script properties.
        const linkedinWebHookUrl = PropertiesService.getScriptProperties().getProperty("linkedin_zapier_webhook_url")
        if (!linkedinWebHookUrl) {
            // Log an error if the WebHook URL is invalid.
            Logger.log("invalid linkedin webhook")
            return
        }

        // Retrieve the Facebook WebHook URL from script properties.
        const facebookWebHook = PropertiesService.getScriptProperties().getProperty("facebook_zapier_webhook_url")
        if (!facebookWebHook) {
            // Log an error if the WebHook URL is invalid.
            Logger.log("invalid facebook webhook")
            return;
        }

        // Create a new payload with the token added.
        const usePayload = {
            ...payload, token
        }

        // Trigger the social media post for LinkedIn.
        SocialMediaZapierCall.triggerSocialMediaPost(linkedinWebHookUrl, usePayload)

        // Add a delay to prevent spamming.
        TimeUtils.sleepRandBetween(1000, 2000)

        // Trigger the social media post for Facebook.
        SocialMediaZapierCall.triggerSocialMediaPost(facebookWebHook, usePayload)
    }
}