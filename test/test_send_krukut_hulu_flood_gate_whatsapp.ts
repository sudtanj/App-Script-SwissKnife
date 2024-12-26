import {FloodGateDataService} from "../lib/dsdki_lib_service";
import {CallMeBotWhatsAppAPI} from "../lib/callmebot_whatsapp_service";

async function TestSendKrukutHuluFloodGateWhatsapp() {
    let text = ""
    const floodGateDataById = FloodGateDataService.getFloodGateDataById(159)
    if (!floodGateDataById) {
        return null
    }
    text = `Krukut Hulu flood gate is ${floodGateDataById.TINGGI_AIR}, previous height is ${floodGateDataById.TINGGI_AIR_SEBELUMNYA} with status ${floodGateDataById.STATUS_SIAGA} \n`
    const weatherForecasts = FloodGateDataService.fetchWeatherForecast(false)
    for (const weatherForecast of weatherForecasts) {
        text = text + `Weather forecast for ${weatherForecast.daerah} in morning is  ${weatherForecast.pagi}, in day is ${weatherForecast.siang}, in night is ${weatherForecast.malam} \n`
    }

    await CallMeBotWhatsAppAPI.sendMessage(text)
}