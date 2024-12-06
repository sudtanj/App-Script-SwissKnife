import {SocialMediaAutoPost} from "../lib/social_media_auto_post";

export class MeikartaAdsWorker {
    private static readonly TITLE = "🏢 For Sale: Modern & Cozy 2-Bedroom Apartment in Meikarta";
    private static readonly BODY = `
        🏢 For Sale: Modern & Cozy 2-Bedroom Apartment in Meikarta

        ✅ Living Area: 57m²
        ✅ 2 Bedrooms, 1 Bathroom
    
        📍 Location: Cikarang Selatan, Bekasi
        
        Situated in a prime area, this apartment offers convenient access to various public amenities—perfect for modern living.
     
        💰 Price: IDR 800 Million
      
        Looking for a stylish and comfortable home? This beautifully designed apartment in Meikarta is ideal for young professionals or small families.
        
        📸 Discover more photos and details here: https://bit.ly/meikarta-distrik-1
        ✨ Interested? Let’s connect and make this your new home!
 
        #ApartmentForSale #MeikartaLiving #RealEstate #CikarangProperty #ModernLiving #PropertyInvestment #HomeSweetHome
    `;
    private static readonly IMAGE_URL = "https://i.imgur.com/XTg1ELx.jpeg";
    private static readonly LINK = "https://bit.ly/meikarta-distrik-1";

    public static run(): void {
        SocialMediaAutoPost.run({
            title: this.TITLE,
            body: this.BODY,
            link: this.LINK,
            imageUrl: this.IMAGE_URL,
        });
    }
}