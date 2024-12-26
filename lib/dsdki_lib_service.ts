import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;
import {UrlFetchAppHelper} from "./url_fetch_app_helper";

export interface FloodGateData {
    ID_PINTU_AIR: number;
    KODE_STASIUN: string;
    NAMA_PINTU_AIR: string;
    LOKASI: string;
    SORT_NUMBER: number;
    SIAGA1: number;
    SIAGA2: number;
    SIAGA3: number;
    SIAGA4: number;
    COOR_X: number;
    COOR_Y: number;
    LATITUDE: string;
    LONGITUDE: string;
    FILE_EXPORT: string;
    RECORD_STATUS: number;
    CREATED_DATE: string;
    CREATED_BY: string;
    LAST_UPDATED_DATE: string;
    LAST_UPDATED_BY: string;
    TINGGI_AIR: number;
    TINGGI_AIR_SEBELUMNYA: number;
    TANGGAL: string;
    STATUS_SIAGA: string;
    CCTV_URL: string;
}

export interface WeatherForecast {
    daerah: string;
    pagi: string;
    imagePagi: string;
    siang: string;
    imageSiang: string;
    malam: string;
    imageMalam: string;
}

export class FloodGateDataService {
    private static cache: FloodGateData[] | null = null;
    private static cacheTimestamp: number | null = null;
    private static cacheTtl: number = 60 * 1000; // 1 minute

    private static weatherForecastCache: WeatherForecast[] | null = null;
    private static weatherForecastCacheTimestamp: number | null = null;
    private static weatherForecastCacheTtl: number = 60 * 1000; // 1 minute

    public static fetchWeatherForecast(forceRefetch: boolean = false): WeatherForecast[] {
        if (!forceRefetch && FloodGateDataService.weatherForecastCache !== null && FloodGateDataService.weatherForecastCacheTimestamp !== null) {
            const now = new Date().getTime();
            if (now - FloodGateDataService.weatherForecastCacheTimestamp < FloodGateDataService.weatherForecastCacheTtl) {
                return FloodGateDataService.weatherForecastCache;
            }
        }

        const url = 'https://apiews.dsdadki.web.id/PrakiraanCuaca/cuaca';
        const options: URLFetchRequestOptions = {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const data = UrlFetchAppHelper.fetchAsObject<WeatherForecast[]>(url, options);
        FloodGateDataService.weatherForecastCache = data;
        FloodGateDataService.weatherForecastCacheTimestamp = new Date().getTime();
        return data;
    }

    public static fetchFloodGateData(forceRefetch: boolean = false): FloodGateData[] {
        if (!forceRefetch && FloodGateDataService.cache !== null && FloodGateDataService.cacheTimestamp !== null) {
            const now = new Date().getTime();
            if (now - FloodGateDataService.cacheTimestamp < FloodGateDataService.cacheTtl) {
                return FloodGateDataService.cache;
            }
        }

        const url = 'https://poskobanjir.dsdadki.web.id/datatmalaststatus.json';
        const options: URLFetchRequestOptions = {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const data = UrlFetchAppHelper.fetchAsObject<FloodGateData[]>(url, options);

        FloodGateDataService.cache = data;
        FloodGateDataService.cacheTimestamp = new Date().getTime();

        return data;
    }

    public static getFloodGateDataById(id: number): FloodGateData | null {
        const data = FloodGateDataService.fetchFloodGateData();
        for (const item of data) {
            if (item.ID_PINTU_AIR === id) {
                return item;
            }
        }
        return null;
    }

    public static getFloodGateDataByName(name: string): FloodGateData | null {
        const data = FloodGateDataService.fetchFloodGateData();
        for (const item of data) {
            if (item.NAMA_PINTU_AIR === name) {
                return item;
            }
        }
        return null;
    }
}