import {SocialMediaAutoPost} from "../lib/social_media_auto_post";

export class MeikartaAdsWorker {
    private static readonly TITLE = "🏢 For Sale: Modern & Cozy 2-Bedroom Apartment in Meikarta";
    private static readonly BODY = `
        🏢 For Sale: Modern & Cozy 2-Bedroom Apartment in Meikarta

        ✅ Living Area: 57m²
        ✅ 2 Bedrooms, 1 Bathroom
    
        📍 Location: Cikarang Selatan, Bekasi
        
        Situated in a prime area, this apartment offers convenient access to various public amenities—perfect for modern living.
     
        💰 Price: IDR 1 Billion
      
        Looking for a stylish and comfortable home? This beautifully designed apartment in Meikarta is ideal for young professionals or small families.
        
        📸 Discover more photos and details here: https://dynamic-link.pinhome.id/consumer/jQfgyuGEk
        ✨ Interested? Let’s connect and make this your new home!
 
        #ApartmentForSale #MeikartaLiving #RealEstate #CikarangProperty #ModernLiving #PropertyInvestment #HomeSweetHome
    `;
    private static readonly IMAGE_URL = "https://i.ibb.co.com/RGBWZcMS/c25c8ffa-d843-45ab-8123-7d6a8bf5b7a9.jpg";
    private static readonly LINK = "https://dynamic-link.pinhome.id/consumer/jQfgyuGEk";

    public static run(): void {
        SocialMediaAutoPost.run({
            title: this.TITLE,
            body: this.BODY,
            link: this.LINK,
            imageUrl: this.IMAGE_URL,
        });
    }
}