import { FC } from 'react'
import { Text, View } from 'react-native'

import { IUser } from '@/types/user.interface'

import UserEmail from './userdata-self/UserEmail'
import UserName from './userdata-self/UserName'
import UserPhone from './userdata-self/UserPhone'

interface Iprops {
	profile: IUser | undefined
	isRefreshLoding: boolean
}

const UserData: FC<Iprops> = ({ profile, isRefreshLoding }) => {
	return (
		<>
			<View className='my-6 flex items-start justify-center'>
				<Text className='text-xl text-red-500'>Мои данные</Text>
				<UserPhone
					profile={profile}
					isRefreshLoding={isRefreshLoding}
				/>
				<UserName profile={profile} isRefreshLoding={isRefreshLoding} />
				<UserEmail
					profile={profile}
					isRefreshLoding={isRefreshLoding}
				/>
			</View>
		</>
	)
}

export default UserData
