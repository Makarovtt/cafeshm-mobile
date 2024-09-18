import { IUser } from '@/types/user.interface'

export interface IUserProps {
	profile: IUser | undefined
	isRefreshLoding: boolean
}
