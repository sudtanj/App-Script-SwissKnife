import {SocialMediaAutoPost} from "../lib/social_media_auto_post";

export class RunGadingNiasAdsWorker {
    private static readonly TITLE = "Affordable and Minimalist 2BR Apartment at Gading Nias Residence";
    private static readonly IMAGE_URL = "https://i.imgur.com/h6PUIPq.jpeg";
    private static readonly LINK = "https://bit.ly/rent-gading-nias";
    private static readonly BODY = `
        Looking for a cozy and affordable stay in Kelapa Gading? Check out the Affordable and Minimalist 2BR Apartment at Gading Nias Residence. This fully furnished apartment offers:
        - Prime location near Mall of Indonesia, Kelapa Gading Mall, and Artha Gading Mall.
        - 24/7 security, CCTV, ATM, lift, and on-site restaurant.
        - Amazing city views with a private balcony to relax and enjoy the surroundings. 
        - Modern amenities including AC, TV, Wi-Fi, queen and single beds, quality hotel linens, and kitchen essentials.
        
        Conveniently located just:   
        - 60 mins to Soekarno-Hatta Airport
        - 12 mins to the nearest toll gate
        - 33 mins to JI Expo Kemayoran
        
        Ideal for daily, monthly, or yearly rentals. Book your stay today at: https://bit.ly/rent-gading-nias and experience comfort with a minimalist touch! 🏙️✨ 
        #Travelio #ApartmentForRent #KelapaGading #CityLiving #kelapagading #kelapagadingkuliner #kelapagadingmall #kelapagadingsquare #kelapagadingtimur #kelapagadingphotographer #kelapagadingcake #kelapagadingh #kelapagadingmua
    `;

    public static run(): void {
        SocialMediaAutoPost.run({
            title: this.TITLE,
            body: this.BODY,
            link: this.LINK,
            imageUrl: this.IMAGE_URL,
        });
    }
}

function run_gading_nias_ads_worker() {
    RunGadingNiasAdsWorker.run()
}