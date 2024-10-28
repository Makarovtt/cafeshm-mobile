import { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'

import ProductHeader from '../product/ProductHeader'

const AboutCompany: FC = () => {
	return (
		<Layout>
			<ScrollView className='px-3'>
				<ProductHeader />
				<Heading>О компании</Heading>

				<View className='flex-col items-start gap-y-5'>
					<Text>Сеть-кафе «Шашлычный Мир» основана в 2012 году.</Text>

					<Text>
						Кафе «Шашлычный Мир» с большой радостью открывает для
						Вас свои двери.
					</Text>

					<Text>
						Уютная атмосфера, приветливый персонал, вкусные блюда
						европейской и кавказской кухни. Что ещё нужно для
						хорошего отдыха?!
					</Text>

					<Text>
						4 Vip комнаты с системой караоке, танцпол, 2 общих зала.
						А так же Вы можете заказать наши блюда на доставку или
						самовывоз к вашему столу.
					</Text>

					<Text>Главный офис: г. Астрахань, ул. Татищева, 43А</Text>
					<Text>Телефон: 999-696</Text>
				</View>
			</ScrollView>
		</Layout>
	)
}

export default AboutCompany
