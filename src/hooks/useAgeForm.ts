import axios, { AxiosResponse } from "axios"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { IFormData, IAgeResponse } from "../interfaces/interface"

export const useAgeForm = () => {
	const [age, setAge] = useState('')
	const [previousName, setPreviousName] = useState<string>('')
	const [loading, setLoading] = useState<boolean>(false)
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IFormData>()

	const onSubmit: SubmitHandler<IFormData> = async data => {
		if (data.name === previousName) {
			alert('Такое имя уже было')
			return
		}
		setLoading(true)
		setTimeout(async () => {
			try {
				const response: AxiosResponse<IAgeResponse> =
					await axios.get<IAgeResponse>(
						`https://api.agify.io/?name=${data.name}`
					)
				setPreviousName(data.name)
				setAge(response.data.age)
				setLoading(false)
			} catch (error) {
				console.error('Error fetching age', error)
				setLoading(false)
			}
		}, 3000)
	}

	return { handleSubmit, onSubmit, register, errors, loading, age, previousName }
}