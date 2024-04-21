import {UrlFetchAppHelper} from "./url_fetch_app_helper";
import {UrlStringHelper} from "./url_string_helper";

export class GoogleMapsClient {
	key: string

	constructor(key: string) {
		this.key = key
	}

	getTimeEstimate(origin: string, dest: string, departTime: string) {
		const urlDat  = "https://maps.googleapis.com/maps/api/directions/json"
		UrlStringHelper.addQuery(urlDat, {
			origin: origin,
			destination: dest,
			key: this.key,
			traffic_model: "best_guess",
			departure_time: departTime,
		})
		const resData = UrlFetchAppHelper.fetchAsObject<any>(urlDat, {})
		const duration = resData?.routes?.[0]?.legs?.[0]?.duration_in_traffic

		return duration as { text: string, value: number }
	}
}
