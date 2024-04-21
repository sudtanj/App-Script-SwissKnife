import {UrlFetchAppHelper} from "./url_fetch_app_helper";

export class GoogleMapsClient {
	key: string

	constructor(key: string) {
		this.key = key
	}

	getTimeEstimate(origin: string, dest: string, departTime: string) {
		const urlDat  = new URL("https://maps.googleapis.com/maps/api/directions/json")
		urlDat.searchParams.set("origin", origin)
		urlDat.searchParams.set("destination", dest)
		urlDat.searchParams.set("key", this.key)
		urlDat.searchParams.set("traffic_model", "best_guess")
		urlDat.searchParams.set("departure_time", departTime)
		const resData = UrlFetchAppHelper.fetchAsObject<any>(urlDat.toString(), {})
		const duration = resData?.routes?.[0]?.legs?.[0]?.duration_in_traffic

		return duration as { text: string, value: number }
	}
}
