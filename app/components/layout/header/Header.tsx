import { FC } from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

const bgImage = '@/assets/images/header/bg-header.jpg'

const Header: FC = () => {
	return (
		<View
			className='pt-5 flex-row w-full
                        border-b border-b-solid border-b-[#989898]'
			style={{
				paddingTop: -30
			}}
		>
			<ImageBackground
				source={require(bgImage)}
				className='flex-1 justify-end items-center h-24 bg-repeat-x'
			>
				<Image source={require('@/assets/images/header/logo.png')} />
			</ImageBackground>
		</View>
	)
}

export default Header
