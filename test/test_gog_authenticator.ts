import {GmailHelper} from "../lib/gmail_helper";
import {GOGHelper} from "../lib/gog_helper";

function Test_gog_authenticator() {
    const message = GmailHelper.findLatestGOG2FAAuthTokenMessage()
    const body = message.getPlainBody()
    console.log(body)
    const token = GOGHelper.parseAndFindTokenFromMail(body)
    console.log(token)
}