import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { View } from 'react-native'

import { useAuth } from '@/hooks/useAuth'

import HeaderQuest from './header/HeaderQuest'
import HeaderUser from './header/HeaderUser'

const Header: FC = () => {
	// const { navigate } = useTypedNavigation()
	const { user } = useAuth()

	return (
		<View className='flex-row justify-between items-center mt-4'>
			{user ? <HeaderUser /> : <HeaderQuest />}
		</View>
	)
}

export default Header
