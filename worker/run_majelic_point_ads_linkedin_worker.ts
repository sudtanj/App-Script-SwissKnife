import {LinkedInZapierCall} from "../lib/linkedin_zapier_lib";


export function run_majestic_point_ads_linkedin_worker() {
    const title = "Luxurious 2BR Majestic Point Serpong: Your Urban Retreat in Tangerang"
    const body = `
        🏢 For Rent: Stylish 2-Bedroom Apartment at Majestic Point Serpong! 🌟

        Looking for a furnished rental in Tangerang Selatan? This modern 2-bedroom, 1-bathroom unit at Majestic Point offers everything you need for comfortable living! Enjoy spacious interiors, contemporary furnishings, and convenient access to shopping, dining, and public transport.

        ✨ Key Features:
        - Fully furnished with stylish decor
        - Bright and airy living spaces
        - Prime location in Serpong
        - Close to amenities and green spaces
       
        Don’t miss your chance to call this beautiful apartment home! Visit the link https://bit.ly/majestic-point-rent for viewing today! 🏡✨

        #MajesticPointSerpong #FurnishedApartment #TangerangSelatan #ForRent #2BedroomApartment #ApartmentLiving #serpongcity #bsdserpong #serpong #serpong #serpongbsd #serpongnaturacity #serpongcity #serpongcityss #serponggarden #serponggardenapartment #serpongutara
   `
    const imageUrl = "https://i.imgur.com/J5OOMVk.jpeg"
    const link = "https://bit.ly/majestic-point-rent"

    const token = PropertiesService.getScriptProperties().getProperty("linkedin_zapier_token")
    if (!token) {
        Logger.log("invalid token")
        return
    }
    const webHookUrl = PropertiesService.getScriptProperties().getProperty("linkedin_zapier_webhook_url")
    if (!webHookUrl) {
        Logger.log("invalid webhook")
        return
    }

    LinkedInZapierCall.triggerLinkedInPost(webHookUrl, {
        title, token, body, link, imageUrl
    })

}