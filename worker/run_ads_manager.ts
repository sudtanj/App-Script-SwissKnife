import {run_spring_wood_ads_linkedin_worker} from "./run_spring_wood_ads_linkedin_worker";
import {run_majestic_point_ads_linkedin_worker} from "./run_majelic_point_ads_linkedin_worker";


function run_ads_manager() {
    run_spring_wood_ads_linkedin_worker()
    run_majestic_point_ads_linkedin_worker()
}