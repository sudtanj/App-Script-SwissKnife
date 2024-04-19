import {ApiResponse} from "../interface/api_response";

export function sendSuccess(data: any) {
    const respond: ApiResponse = {
        status: 200,
        message: "success",
        data: data
    }
    return ContentService.createTextOutput(JSON.stringify(respond)).setMimeType(ContentService.MimeType.JSON);
}

export function sendNotFound(data: any) {
    const respond: ApiResponse = {
        status: 404,
        message: "not found",
        data: data
    }
    return ContentService.createTextOutput(JSON.stringify(respond)).setMimeType(ContentService.MimeType.JSON);
}

export function sendUnauthorized(data: any) {
    const respond: ApiResponse = {
        status: 401,
        message: "unauthorized",
        data: data
    }
    return ContentService.createTextOutput(JSON.stringify(respond)).setMimeType(ContentService.MimeType.JSON);
}