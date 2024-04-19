import {GoogleCalendarHelper} from "../lib/google_calendar_helper";


function TestIsTodayOutOfOffice() {
    const res = GoogleCalendarHelper.isTodayOutOfOffice()
    console.log(res)
}