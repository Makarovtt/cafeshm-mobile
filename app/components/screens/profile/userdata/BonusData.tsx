import { FC } from 'react'
import { Text, View } from 'react-native'

const BonusData: FC = () => {
	return (
		<View className='my-6 flex items-start justify-center'>
			<Text className='text-xl text-red-500'>Мои бонусы</Text>
			<View className='flex-row justify-between items-center w-full mt-5'>
				<Text>200</Text>
			</View>
		</View>
	)
}

export default BonusData
