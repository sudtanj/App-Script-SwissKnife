import {SpringWoodAdsWorker} from "./run_spring_wood_ads_worker";
import {MajesticPointAdsWorker} from "./run_majelic_point_ads_worker";
import {TimeUtils} from "../lib/time_utils";
import {RunGadingNiasAdsWorker} from "./run_gading_nias_ads_worker";
import {CitraRayaAdsWorker} from "./run_citra_raya_ads_worker";
import {MeikartaAdsWorker} from "./run_meikarta_ads_worker";


function run_ads_manager() {
    MajesticPointAdsWorker.run()
    TimeUtils.sleepRandBetween(1000, 5000)
    SpringWoodAdsWorker.run()
    TimeUtils.sleepRandBetween(1000, 5000)
    RunGadingNiasAdsWorker.run()
    TimeUtils.sleepRandBetween(1000, 5000)
    CitraRayaAdsWorker.run()
    TimeUtils.sleepRandBetween(1000, 5000)
    MeikartaAdsWorker.run()
}