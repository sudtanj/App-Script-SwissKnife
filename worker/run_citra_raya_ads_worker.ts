import {SocialMediaAutoPost} from "../lib/social_media_auto_post";

export class CitraRayaAdsWorker {
    private static readonly TITLE = "🏡 For Rent: Cozy 2-Bedroom Home in Citra Raya, Faenza Cluster";
    private static readonly BODY = `
        🏡 For Rent: Cozy 2-Bedroom Home in Citra Raya, Faenza Cluster

        ✅ Land Area: 60m² | Building Area: 28m²
        ✅ 2 Bedrooms, 1 Bathroom

        📍 Location: Panongan, Tangerang
        Strategically located near key public facilities, offering the perfect blend of comfort and convenience.
        
        💰 Annual Rent: IDR 20 Million/year
        
        Looking for your next home? Don’t miss out on this cozy and affordable rental opportunity!

        📸 Click here for more details and photos: https://bit.ly/citra-raya-faenza
        ✨ Ready to move in? Let’s connect today!
        
        #HouseForRent #RentalProperty #TangerangHomes #CitraRayaLiving #RealEstate #HomeSweetHome #PropertyRental #citraraya #citrarayacikupa #citrarayahits #citrarayatangerang #citrarayacity
    `;
    private static readonly IMAGE_URL = "https://i.imgur.com/EBeOuX5.jpeg";
    private static readonly LINK = "https://bit.ly/citra-raya-faenza";

    public static run(): void {
        SocialMediaAutoPost.run({
            title: this.TITLE,
            body: this.BODY,
            link: this.LINK,
            imageUrl: this.IMAGE_URL,
        });
    }
}