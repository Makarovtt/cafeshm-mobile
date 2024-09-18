import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import Heading from '@/components/ui/Heading'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const Bonus: FC = () => {
	const { navigate } = useTypedNavigation()
	return (
		<>
			<Heading>Бонусы</Heading>
			<View className='mx-auto'>
				<Pressable onPress={() => navigate('BonusDescription')}>
					<Image
						source={require('@/assets/images/bonus/baner-1.png')}
						className='m-0 p-0'
						style={{
							width: '100%',
							height: undefined,
							aspectRatio: 2.5,
							resizeMode: 'contain'
						}}
					/>
				</Pressable>
			</View>
		</>
	)
}

export default Bonus
