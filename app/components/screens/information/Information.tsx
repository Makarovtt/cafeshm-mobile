import { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'

import ProductHeader from '../product/ProductHeader'

const Information: FC = () => {
	return (
		<Layout>
			<ScrollView className='px-3'>
				<ProductHeader />
				<Heading>Соглашения</Heading>

				<View className='flex-col items-start gap-y-5'>
					<Text>Пользовательское соглашение.</Text>

					<Text>Обработка персональных данных</Text>

					<Text>Правила оплаты</Text>

					<Text>Условия пользования карт</Text>
				</View>
			</ScrollView>
		</Layout>
	)
}

export default Information
