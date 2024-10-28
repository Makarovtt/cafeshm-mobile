import AsyncStorage from '@react-native-async-storage/async-storage'

import { EnumAsyncStorage, IAuthResponse } from '@/types/auth.interface'

import { deleteDataUserUrl, getAuthUrl } from '@/config/api.config'

import { request } from '../api/request.api'

import { deleteTokensStorage, saveToStorage } from './auth.helper'

export const AuthService = {
	async main(variant: 'reg' | 'login', phone: string, password: string) {
		const response = await request<IAuthResponse>({
			url: getAuthUrl(`/${variant === 'reg' ? 'register' : 'login'}`),
			method: 'POST',
			data: { phone, password }
		})

		if (response.accessToken) await saveToStorage(response)

		return response
	},

	async delete(deleteId: string) {
		console.log(deleteDataUserUrl(`/${deleteId}`))
		const response = await request({
			url: deleteDataUserUrl(`/${deleteId}`),
			method: 'DELETE'
		})

		return response
	},

	async logout() {
		await deleteTokensStorage()
		await AsyncStorage.removeItem(EnumAsyncStorage.USER)
	}
}
