import { IUser } from './user.interface'

export interface IUserDataInput {
	name: string
	phone: string
	email: string
	id: string
}
export interface IAuthFormData
	extends Pick<IUser, 'phone' | 'password'>,
		IUserDataInput {}

export enum EnumSecureStore {
	ACCESS_TOKEN = 'accessToken',
	REFRESH_TOKEN = 'refreshToken'
}

export enum EnumAsyncStorage {
	USER = 'user'
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}
