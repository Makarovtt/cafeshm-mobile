import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import Heading from '@/components/ui/Heading'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const Actions: FC = () => {
	const { navigate } = useTypedNavigation()
	return (
		<View className='mx-3'>
			<Heading>Акции</Heading>
			<Pressable
				onPress={() => navigate('ActionItem')}
				className='bg-gray-100 rounded-xl relative overflow-hidden flex items-center justify-center
							w-full h-[110px] my-5'
			>
				<Image
					source={require('@/assets/images/actions/banner-1.png')}
					// className='object-contain w-[98%]'
					style={{
						width: '100%',
						height: undefined,
						aspectRatio: 2,
						resizeMode: 'contain'
					}}
				/>
			</Pressable>
			<Pressable
				onPress={() => navigate('ActionItem')}
				className='bg-gray-100 rounded-xl relative overflow-hidden flex items-center justify-center
							w-full h-[110px]  my-5'
			>
				<Image
					source={require('@/assets/images/actions/banner-2.png')}
					// className='object-contain w-[98%]'
					style={{
						width: '100%',
						height: undefined,
						aspectRatio: 2,
						resizeMode: 'contain'
					}}
				/>
			</Pressable>
		</View>
	)
}

export default Actions
