import { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'

import ProductHeader from '../product/ProductHeader'

const ActionItem: FC = () => {
	return (
		<Layout>
			<ScrollView className='px-3'>
				<ProductHeader />
				<Heading>Акция</Heading>
			</ScrollView>
		</Layout>
	)
}

export default ActionItem
