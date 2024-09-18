import { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'

import Header from './Header'
import BannerActions from './actions/BannerActions'
import Bonus from './bonus/Bonus'
import Categories from './categories/Categories'
import Products from './products/Products'

const Home: FC = () => {
	return (
		<Layout>
			<ScrollView className='px-3'>
				<Header />
				<BannerActions />
				<Bonus />
				<Products />
			</ScrollView>
		</Layout>
	)
}

export default Home
