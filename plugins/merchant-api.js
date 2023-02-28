import axios from "axios"
import md5 from "md5"

class ampangPedia {
	#userid = "";
	#apikey = "";
	#sign = "";
	#api = "";
	constructor(userid, apikey) {
		this.#userid = userid;
		this.#apikey = apikey;
		this.#sign = md5(`${this.#userid}${this.#apikey}`);
		this.headers = {
			"user-agent": "FrierenDv NodeJS(18.1x)",
		};
		this.profile = this.profile;
		this.prepaid = this.prepaid;
		this.media = this.media;
		this.#api = {
			prepaid: "https://ampangpedia.com/api/prepaid",
			social_media: "https://ampangpedia.com/api/social-media",
		};
	}
	init() {
		if (this.prepaid) return this;
		if (this.media) return this;
		this.#prepaid();
		this.#media();
	}
	// Probably usefull
	async profile() {
		let Response = {};
		const { data } = await axios
			.request({
				url: "https://ampangpedia.com/api/profile",
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					...this.headers,
				},
				data: new URLSearchParams({
					key: this.#apikey,
					sign: this.#sign,
				}),
			})
			.catch((e) => (e === null || e === void 0 ? void 0 : e.response));
		if (data.result && data.data) {
			Object.assign(Response, { ...data });
		} else {
			if (typeof data === "object") {
				Object.assign(Response, { ...data });
			} else {
				return data;
			}
		}
		return Response;
	}
	async watch(trxid) {
		let retry = 0;
		let Response;
		while (true) {
			const { data } = await axios
				.request({
					url: this.#api.prepaid,
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
						...this.headers,
					},
					data: new URLSearchParams({
						key: this.#apikey,
						sign: this.#sign,
						type: "status",
						trxid: trxid,
					}),
				})
				.catch((e) => (e === null || e === void 0 ? void 0 : e.response));
			if (data.result) {
				const { status } = Array.isArray(data.data) ? data.data[0] : data.data;
				if (status === "success") {
					Response = data;
					break;
				}
				if (status === "error") {
					Response = data;
					break;
				}
			} else {
				retry = retry + 1;
				if (retry >= 20) {
					Response = data.data ? data.data : false;
					break;
				}
			}
		}
		return Response;
	}
	async #post(api, opts) {
		const { data } = await axios
			.request({
				url: api,
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					...this.headers,
				},
				data: new URLSearchParams({
					key: this.#apikey,
					sign: this.#sign,
					...opts,
				}),
			})
			.catch((e) => (e === null || e === void 0 ? void 0 : e.response));
		if (data && typeof data === "object") {
			return {
				...data,
			};
		} else {
			return data;
		}
	}
	async #prepaid() {
		const order = async (service, id, server) => {
			if (!service || !id) {
				return {
					status: false,
					messagge: `Missing ${!service ? "service code" : "data_no"}`,
				};
			}
			return this.#post(this.#api.prepaid, {
				type: "order",
				service,
				data_no: `${id}${server ? server : ""}`,
			});
		};
		const status = async (trxid, limit) => {
			return this.#post(this.#api.prepaid, {
				type: "status",
				trxid: trxid ? trxid : "",
				limit: typeof limit === "number" ? limit : "",
			});
		};
		const services = async (filter_type, filter_value) => {
			return this.#post(this.#api.prepaid, {
				type: "services",
				filter_type: filter_type ? filter_type : "",
				filter_value: filter_value ? filter_value : "",
			});
		};
		this.prepaid = {
			order,
			status,
			services,
		};
		return this;
	}
	async #media() {
		const order = async (service, id, server) => {
			if (!service || !data_no) {
				return {
					status: false,
					messagge: `Missing ${!service ? "service code" : "data_no"}`,
				};
			}
			return this.#post(this.#api.social_media, {
				type: "order",
				service,
				data_no: `${id}${server ? server : ""}`,
			});
		};
		const status = async (trxid, limit) => {
			return this.#post(this.#api.social_media, {
				type: "status",
				trxid: trxid ? trxid : "",
				limit: limit ? limit : "",
			});
		};
		const services = async (filter_type, filter_value) => {
			return this.#post(this.#api.social_media, {
				type: "services",
				filter_type: filter_type ? filter_type : "",
				filter_value: filter_value ? filter_value : "",
			});
		};
		this.media = {
			order,
			status,
			services,
		};
		return this;
	}
}
export { ampangPedia }
