import { Component, FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import Swiper from 'react-native-web-swiper'

import Heading from '@/components/ui/Heading'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const BannerActions: FC = () => {
	const { navigate } = useTypedNavigation()
	return (
		<>
			<Pressable
				onPress={() => {
					navigate('Actions')
				}}
			>
				<Heading>Акции</Heading>
			</Pressable>
			<View className='flex-1 h-[170px]'>
				<Swiper
					controlsProps={{
						nextTitle: '',
						prevTitle: ''
					}}
				>
					<Pressable
						onPress={() => {
							navigate('Actions')
						}}
					>
						<Image
							source={require('@/assets/images/actions/banner-1.png')}
							className=''
							style={{
								width: '100%',
								height: undefined,
								aspectRatio: 2.5,
								resizeMode: 'contain'
							}}
						/>
					</Pressable>
					<Pressable
						onPress={() => {
							navigate('Actions')
						}}
					>
						<Image
							source={require('@/assets/images/actions/banner-2.png')}
							style={{
								width: '100%',
								height: undefined,
								aspectRatio: 2.5,
								resizeMode: 'contain'
							}}
						/>
					</Pressable>
				</Swiper>
			</View>
		</>
	)
}

export default BannerActions
