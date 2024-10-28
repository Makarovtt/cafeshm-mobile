import { FC } from 'react'
import { Text, View } from 'react-native'

import ButtonForm from '@/components/ui/button/ButtonForm'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const InformationData: FC = () => {
	const { navigate } = useTypedNavigation()
	return (
		<View className='my-6 flex items-start justify-center'>
			<Text className='text-xl text-red-500'>Общая информация</Text>
			<View className='flex flex-row justify-between items-center w-full'>
				<Text className='text-base text-gray-600'>О компании</Text>
				<ButtonForm
					className='text-left'
					onPress={() => navigate('AboutCompany')}
				>
					Смотреть
				</ButtonForm>
			</View>
			<View className='flex flex-row justify-between items-center w-full'>
				<Text className='text-base text-gray-600'>Соглашения</Text>
				<ButtonForm
					className='text-left'
					onPress={() => navigate('Information')}
				>
					Смотреть
				</ButtonForm>
			</View>
		</View>
	)
}

export default InformationData
