import { FC } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import Heading from '@/components/ui/Heading'

import { useAuth } from '@/hooks/useAuth'

import { AuthService } from '@/services/auth/auth.service'

import { useProfile } from './useProfile'
import AddressData from './userdata/AddressData'
import BonusData from './userdata/BonusData'
import CardsData from './userdata/CardsData'
import UserData from './userdata/UserData'

const ProfileLogin: FC = () => {
	const { setUser } = useAuth()

	const { profile, isRefreshLoding } = useProfile()

	return (
		<ScrollView className='h-full'>
			<View className='flex-1 flex-col h-full'>
				<View className='flex-row justify-between items-center'>
					<Heading isCenter>Привет, {profile?.name}!</Heading>
					<TouchableOpacity
						onPress={() =>
							AuthService.logout().then(() => setUser(null))
						}
					>
						<Text>Выйти</Text>
					</TouchableOpacity>
				</View>

				<UserData isRefreshLoding={isRefreshLoding} profile={profile} />
				<BonusData />
				<CardsData />
				<AddressData />
			</View>
		</ScrollView>
	)
}

export default ProfileLogin
