import {GetEvent} from "../interface/get_event";
import {PostBody, PostBodyPath} from "../interface/post_body";
import {sendNotFound, sendUnauthorized} from "../lib/responder_helper";
import {isTodayOutOfOfficeHandler} from "./is_today_out_of_office_handler";

function doPost(e: GetEvent) {
    const body: PostBody = JSON.parse(e.postData.contents) as PostBody
    const secretToken = PropertiesService.getScriptProperties().getProperty("api_secret_token")
    if (body.secretToken != secretToken) {
        return sendUnauthorized("invalid token " + body.secretToken)
    }
    switch (body.path) {
        case PostBodyPath.IS_TODAY_OUT_OF_OFFICE:
            return isTodayOutOfOfficeHandler()
        default:
            return sendNotFound("invalid path!")
    }
}

