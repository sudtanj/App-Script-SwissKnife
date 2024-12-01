import {SpringWoodAdsWorker} from "./run_spring_wood_ads_worker";
import {MajesticPointAdsWorker} from "./run_majelic_point_ads_worker";
import {TimeUtils} from "../lib/time_utils";


function run_ads_manager() {
    MajesticPointAdsWorker.runLinkedinWorker()
    TimeUtils.sleepRandBetween(1000, 5000)
    SpringWoodAdsWorker.run()
}