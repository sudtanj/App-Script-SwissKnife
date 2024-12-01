import {SocialMediaZapierCall} from "./social_media_zapier_lib";
import {TimeUtils} from "./time_utils";

export interface SocialMediaAutoPayload {
    title: string;
    body: string;
    imageUrl: string;
    link: string;
}

export class SocialMediaAutoPost {
    static run(payload: SocialMediaAutoPayload) {
        const token = PropertiesService.getScriptProperties().getProperty("linkedin_zapier_token")
        if (!token) {
            Logger.log("invalid token")
            return
        }
        const linkedinWebHookUrl = PropertiesService.getScriptProperties().getProperty("linkedin_zapier_webhook_url")
        if (!linkedinWebHookUrl) {
            Logger.log("invalid linkedin webhook")
            return
        }

        const facebookWebHook = PropertiesService.getScriptProperties().getProperty("facebook_zapier_webhook_url")
        if (!facebookWebHook) {
            Logger.log("invalid facebook webhook")
            return;
        }

        const usePayload = {
            ...payload, token
        }

        SocialMediaZapierCall.triggerSocialMediaPost(linkedinWebHookUrl, usePayload)
        // add delay to prevent too much spam
        TimeUtils.sleepRandBetween(1000, 2000)
        SocialMediaZapierCall.triggerSocialMediaPost(facebookWebHook, usePayload)
    }
}