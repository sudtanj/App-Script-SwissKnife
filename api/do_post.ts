import {GetEvent} from "../interface/get_event";
import {PostBody, PostBodyPath} from "../interface/post_body";
import {GoogleCalendarHelper} from "../lib/google_calendar_helper";
import {ResponderHelper} from "../lib/responder_helper";

function doPost(e: GetEvent) {
    const body: PostBody = JSON.parse(e.postData.contents) as PostBody
    const secretToken = PropertiesService.getScriptProperties().getProperty("api_secret_token")
    if (body.secretToken != secretToken) {
        return ResponderHelper.sendUnauthorized("invalid token " + body.secretToken)
    }
    switch (body.path) {
        case PostBodyPath.IS_TODAY_OUT_OF_OFFICE:
            return isTodayOutOfOfficeHandler()
        default:
            return ResponderHelper.sendNotFound("invalid path!")
    }
}

function isTodayOutOfOfficeHandler() {
    const res = GoogleCalendarHelper.isTodayOutOfOffice()
    return res ?  ResponderHelper.sendSuccess(res) :  ResponderHelper.sendNotFound(res)
}