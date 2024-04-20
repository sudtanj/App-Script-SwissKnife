import {GetEvent} from "../interface/get_event";
import {PostBody, PostBodyPath} from "../interface/post_body";
import {GoogleCalendarHelper} from "../lib/google_calendar_helper";
import {ResponderHelper} from "../lib/responder_helper";
import {GmailHelper} from "../lib/gmail_helper";
import {GOGHelper} from "../lib/gog_helper";

function doPost(e: GetEvent) {
    const body: PostBody = JSON.parse(e.postData.contents) as PostBody
    const secretToken = PropertiesService.getScriptProperties().getProperty("api_secret_token")
    if (body.secretToken != secretToken) {
        return ResponderHelper.sendUnauthorized("invalid token " + body.secretToken)
    }
    switch (body.path) {
        case PostBodyPath.IS_TODAY_OUT_OF_OFFICE:
            return isTodayOutOfOfficeHandler()
        case PostBodyPath.GOG_TOKEN:
            return getGOGToken()
        case PostBodyPath.TELEGRAM_BOT_WEBHOOK:
            return getTelegramUpdate(body.data)
        default:
            return ResponderHelper.sendNotFound("invalid path!")
    }
}

function isTodayOutOfOfficeHandler() {
    const res = GoogleCalendarHelper.isTodayOutOfOffice()
    return res ?  ResponderHelper.sendSuccess(res) :  ResponderHelper.sendNotFound(res)
}

// get latest email from gog regarding 2fa token and show it on private api
function getGOGToken() {
    const message = GmailHelper.findLatestGOG2FAAuthTokenMessage()
    const body = message.getPlainBody()
    const [token, err] = GOGHelper.parseAndFindTokenFromMail(body)
    return err ? ResponderHelper.sendNotFound(err) : ResponderHelper.sendSuccess(token)
}

function getTelegramUpdate(data: any) {
    console.log(data)
}