import {isTodayOutOfOffice} from "../lib/is_today_out_of_office";
import {sendNotFound, sendSuccess} from "../lib/responder_helper";

export function isTodayOutOfOfficeHandler() {
    const res = isTodayOutOfOffice()
    return res ? sendSuccess(res) : sendNotFound(res)
}