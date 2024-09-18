import { FC } from 'react'
import { Text, View } from 'react-native'

import ButtonForm from '@/components/ui/button/ButtonForm'

const CardsData: FC = () => {
	return (
		<View className='my-6 flex items-start justify-center'>
			<Text className='text-xl text-red-500'>Мои карты</Text>
			<View className='flex flex-row justify-between items-center w-full'>
				<Text className='text-xl text-gray-600'>нет</Text>
				<ButtonForm className='text-left'>+ Добавить</ButtonForm>
			</View>
		</View>
	)
}

export default CardsData
