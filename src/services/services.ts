import axios, { AxiosResponse } from "axios"
import { IFact } from "../interfaces/interface"

class ApiService {
	async fetchCatFact() {
		try {
			const response: AxiosResponse<IFact> = await axios.get<IFact>(
				'https://catfact.ninja/fact'
			)
			return response.data.fact
		} catch (error) {
			console.error('Error fetching cat fact', error)
		}
	}

}

export default new ApiService()
