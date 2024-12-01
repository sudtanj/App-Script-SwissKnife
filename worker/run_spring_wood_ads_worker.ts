import {SocialMediaZapierCall} from "../lib/social_media_zapier_lib";
import {run_social_media_auto_post} from "../lib/social_media_auto_post";

export function run_spring_wood_ads_worker() {
    const title = "Stunning City View Studio Apartment at Springwood Residence, Tangerang, Indonesia"
    const body = `
        ✨ Discover Your Dream Home at Springwood Residence! 🌿
        
        Experience modern living in the heart of Tangerang Selatan! This stunning rental unit offers spacious interiors, top-notch amenities, and beautiful views. Enjoy the convenience of nearby shopping, dining, and parks—all just steps away! ?️?
        
        Don’t miss out on this perfect blend of comfort and style. 
        Visit https://bit.ly/rent-springwood and make Springwood Residence your new home! ?❤️
        
        #SpringwoodResidence #TangerangSelatan #ApartmentLiving #DreamHome #serpong #bsdserpong #hotelroom #bedroomdecor #interiordesign #minimalism #cozyhome #tangerang #tangerangselatan #tangerangkota #tangerangolshop #tangerangfoodstory #tangerangfoodies #tangerangfood #tangerangkabupaten #tangerangculinary #tangerangcity
    `
    const imageUrl = "https://i.imgur.com/wNF3L5X.jpeg"
    const link = "https://bit.ly/rent-springwood"

    run_social_media_auto_post({
        title: title,
        body: body,
        link: link,
        imageUrl: imageUrl,
    })

}