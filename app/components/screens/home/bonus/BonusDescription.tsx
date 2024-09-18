import { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'

import ProductHeader from '../../product/ProductHeader'

const BonusDescription: FC = () => {
	return (
		<Layout>
			<ScrollView className='px-3'>
				<ProductHeader />
				<Heading>Бонусы</Heading>
			</ScrollView>
		</Layout>
	)
}

export default BonusDescription
