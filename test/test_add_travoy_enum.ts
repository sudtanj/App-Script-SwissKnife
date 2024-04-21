import {TravoyEnum} from "../lib/travoy_service";

function TestAddTravoyEnum() {
    const constant = "travoy_enums"
    const enumList = [
        TravoyEnum.JORR_W2S_KM_18_000
    ]

    PropertiesService.getScriptProperties().setProperty(constant, JSON.stringify(enumList))
}