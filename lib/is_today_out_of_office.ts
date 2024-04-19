import {TimeUtils} from "./time_utils";

export function isTodayOutOfOffice() {
    const todayDate = new Date()
    const calendarId = PropertiesService.getScriptProperties().getProperty("calendar_id")
    if (calendarId.length <= 0) {
        return false
    }
    const calendar = Calendar.Events.list(calendarId, {
        eventTypes: "outOfOffice",
        timeMin: TimeUtils.getStartDate(todayDate),
        timeMax: TimeUtils.getEndDate(todayDate)
    })
    return (calendar.items.length > 0)
}