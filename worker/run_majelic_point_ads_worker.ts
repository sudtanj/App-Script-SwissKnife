import {run_social_media_auto_post} from "../lib/social_media_auto_post";

export class MajesticPointAdsWorker {
    private static readonly TITLE = "Luxurious 2BR Majestic Point Serpong: Your Urban Retreat in Tangerang";
    private static readonly IMAGE_URL = "https://i.imgur.com/J5OOMVk.jpeg";
    private static readonly LINK = "https://bit.ly/majestic-point-rent";
    private static readonly BODY = `
        🏢 For Rent: Stylish 2-Bedroom Apartment at Majestic Point Serpong! 🌟

        Looking for a furnished rental in Tangerang Selatan? This modern 2-bedroom, 1-bathroom unit at Majestic Point offers everything you need for comfortable living! Enjoy spacious interiors, contemporary furnishings, and convenient access to shopping, dining, and public transport.

        ✨ Key Features:
        - Fully furnished with stylish decor
        - Bright and airy living spaces
        - Prime location in Serpong
        - Close to amenities and green spaces
       
        Don't miss your chance to call this beautiful apartment home! Visit the link https://bit.ly/majestic-point-rent for viewing today! 🏡✨

        #MajesticPointSerpong #FurnishedApartment #TangerangSelatan #ForRent #2BedroomApartment #ApartmentLiving #serpongcity #bsdserpong #serpong #serpong #serpongbsd #serpongnaturacity #serpongcity #serpongcityss #serponggarden #serponggardenapartment #serpongutara
    `;

    public static runLinkedinWorker(): void {
        run_social_media_auto_post({
            title: this.TITLE,
            body: this.BODY,
            link: this.LINK,
            imageUrl: this.IMAGE_URL,
        });
    }
}