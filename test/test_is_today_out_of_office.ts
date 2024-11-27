import {GoogleCalendarHelper} from "../lib/google_calendar_helper";


function TestIsTodayOutOfOffice() {
    const res = GoogleCalendarHelper.isTodayOutOfOffice(new Date())
    console.log(res)
}

function TestIsTodayAt830OutOfOffice() {
    const date = new Date("2024-11-26T01:30:00.000Z"); // Convert to UTC
    console.log(date.toString()); // Display the date in local time
    console.log(date.toISOString()); // Display the date in UTC
    const res = GoogleCalendarHelper.isTodayOutOfOffice(date)
    console.log(res)
}

function TestIsTomorrowAt830OutOfOffice() {
    const date = new Date("2024-11-27T01:30:00.000Z"); // Convert to UTC
    console.log(date.toString()); // Display the date in local time
    console.log(date.toISOString()); // Display the date in UTC
    const res = GoogleCalendarHelper.isTodayOutOfOffice(date)
    console.log(res)
}

function TestIsNextTomorrowAt830OutOfOffice() {
    const date = new Date("2024-11-28T01:30:00.000Z"); // Convert to UTC
    console.log(date.toString()); // Display the date in local time
    console.log(date.toISOString()); // Display the date in UTC
    const res = GoogleCalendarHelper.isTodayOutOfOffice(date)
    console.log(res)
}

function TestIsTodayAt1830OutOfOffice() {
    const date = new Date("2024-11-26T11:30:00.000Z"); // Convert to UTC
    console.log(date.toString()); // Display the date in local time
    console.log(date.toISOString()); // Display the date in UTC
    const res = GoogleCalendarHelper.isTodayOutOfOffice(date)
    console.log(res)
}

function TestIsTomorrowAt1830OutOfOffice() {
    const date = new Date("2024-11-27T11:30:00.000Z"); // Convert to UTC
    console.log(date.toString()); // Display the date in local time
    console.log(date.toISOString()); // Display the date in UTC
    const res = GoogleCalendarHelper.isTodayOutOfOffice(date)
    console.log(res)
}

function TestIsNextTomorrowAt1830OutOfOffice() {
    const date = new Date("2024-11-28T11:30:00.000Z"); // Convert to UTC
    console.log(date.toString()); // Display the date in local time
    console.log(date.toISOString()); // Display the date in UTC
    const res = GoogleCalendarHelper.isTodayOutOfOffice(date)
    console.log(res)
}