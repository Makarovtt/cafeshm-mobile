import { FC } from 'react'
import { ScrollView, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Auth from '@/components/screens/auth/Auth'

import { useAuth } from '@/hooks/useAuth'

import ProfileLogin from './ProfileLogin'

const Profile: FC = () => {
	const { user } = useAuth()

	return (
		<Layout>
			<ScrollView className='px-3'>
				{user ? (
					<ProfileLogin />
				) : (
					<View className='mt-10'>
						<Auth />
					</View>
				)}
			</ScrollView>
		</Layout>
	)
}

export default Profile
