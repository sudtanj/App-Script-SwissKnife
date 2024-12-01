import {run_spring_wood_ads_worker} from "./run_spring_wood_ads_worker";
import {run_majestic_point_ads_linkedin_worker} from "./run_majelic_point_ads_worker";
import {TimeUtils} from "../lib/time_utils";


function run_ads_manager() {
    run_spring_wood_ads_worker()
    TimeUtils.sleepRandBetween(1000, 5000)
    run_majestic_point_ads_linkedin_worker()
}