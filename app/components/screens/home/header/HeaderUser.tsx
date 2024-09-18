import { FontAwesome5 } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { useProfile } from '../../profile/useProfile'

const HeaderUser: FC = () => {
	const { navigate } = useTypedNavigation()
	const { profile } = useProfile()
	return (
		<View>
			{profile?.name ? (
				<Text className='font-medium text-2xl'>
					Привет, {profile?.name}!
				</Text>
			) : (
				<Pressable
					onPress={() => navigate('Profile')}
					className='flex-row justify-start items-center gap-x-4'
				>
					<Text>Заполнить профиль</Text>
					<FontAwesome5
						name='arrow-circle-right'
						size={24}
						color='gray'
					/>
				</Pressable>
			)}
		</View>
	)
}

export default HeaderUser
