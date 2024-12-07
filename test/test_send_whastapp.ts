import { CallMeBotWhatsAppAPI } from "../lib/callmebot_whatsapp_service";

async function TestSendWhatsapp() {
    await CallMeBotWhatsAppAPI.sendMessage("Test Send Whatsapp");
}