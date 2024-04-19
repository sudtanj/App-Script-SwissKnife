import {TimeUtils} from "./time_utils";

export class GoogleCalendarHelper {
    static isTodayOutOfOffice() {
        const todayDate = new Date()
        const calendarId = PropertiesService.getScriptProperties().getProperty("calendar_id")
        if (!calendarId || calendarId?.length <= 0) {
            return false
        }
        const calendar = Calendar.Events?.list(calendarId, {
            eventTypes: "outOfOffice",
            timeMin: TimeUtils.getStartDate(todayDate).toISOString(),
            timeMax: TimeUtils.getEndDate(todayDate).toISOString()
        })
        return ((calendar?.items?.length ?? 0) > 0)
    }
}