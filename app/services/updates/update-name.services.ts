import AsyncStorage from '@react-native-async-storage/async-storage'

import { EnumAsyncStorage, IAuthResponse } from '@/types/auth.interface'

import { updateDataUserUrl } from '@/config/api.config'

import { request } from '../api/request.api'
import { deleteTokensStorage, saveToStorage } from '../auth/auth.helper'

export const UpdateUserDataService = {
	async updateName(name: string, id: string) {
		const response = await request<IAuthResponse>({
			url: updateDataUserUrl(`/name/${id}`),
			method: 'PUT',
			data: { name }
		})

		if (response.accessToken) await saveToStorage(response)

		return response
	},
	async updatePhone(phone: string, id: string) {
		const response = await request<IAuthResponse>({
			url: updateDataUserUrl(`/phone/${id}`),
			method: 'PUT',
			data: { phone }
		})

		if (response.accessToken) await saveToStorage(response)

		return response
	},
	async updateEmail(email: string, id: string) {
		const response = await request<IAuthResponse>({
			url: updateDataUserUrl(`/email/${id}`),
			method: 'PUT',
			data: { email }
		})

		if (response.accessToken) await saveToStorage(response)

		return response
	},

	async logout() {
		await deleteTokensStorage()
		await AsyncStorage.removeItem(EnumAsyncStorage.USER)
	}
}
