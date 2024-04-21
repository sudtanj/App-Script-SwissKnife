import {UrlFetchAppHelper} from "./url_fetch_app_helper";

export class GoogleMapsClient {
	key: string

	constructor(key: string) {
		this.key = key
	}

	getTimeEstimate(origin: string, dest: string, departTime: string) {
		const params = new URLSearchParams({
			origin: origin,
			destination: dest,
			key: this.key,
			traffic_model: "best_guess",
			departure_time: departTime,
		})
		const url = "https://maps.googleapis.com/maps/api/directions/json?" + params.toString()
		const resData = UrlFetchAppHelper.fetchAsObject<any>(url, {})
		const duration = resData?.routes?.[0]?.legs?.[0]?.duration_in_traffic

		return duration as { text: string, value: number }
	}
}
