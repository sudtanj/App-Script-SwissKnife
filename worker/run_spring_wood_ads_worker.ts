import {run_social_media_auto_post} from "../lib/social_media_auto_post";

export class SpringWoodAdsWorker {
    private static readonly TITLE = "Stunning City View Studio Apartment at Springwood Residence, Tangerang, Indonesia";
    private static readonly BODY = `
        ✨ Discover Your Dream Home at Springwood Residence! 🌿
        
        Experience modern living in the heart of Tangerang Selatan! This stunning rental unit offers spacious interiors, top-notch amenities, and beautiful views. Enjoy the convenience of nearby shopping, dining, and parks—all just steps away! ?️?
        
        Don't miss out on this perfect blend of comfort and style. 
        Visit https://bit.ly/rent-springwood and make Springwood Residence your new home! ?❤️
        
        #SpringwoodResidence #TangerangSelatan #ApartmentLiving #DreamHome #serpong #bsdserpong #hotelroom #bedroomdecor #interiordesign #minimalism #cozyhome #tangerang #tangerangselatan #tangerangkota #tangerangolshop #tangerangfoodstory #tangerangfoodies #tangerangfood #tangerangkabupaten #tangerangculinary #tangerangcity
    `;
    private static readonly IMAGE_URL = "https://i.imgur.com/wNF3L5X.jpeg";
    private static readonly LINK = "https://bit.ly/rent-springwood";

    public static run(): void {
        run_social_media_auto_post({
            title: this.TITLE,
            body: this.BODY,
            link: this.LINK,
            imageUrl: this.IMAGE_URL,
        });
    }
}