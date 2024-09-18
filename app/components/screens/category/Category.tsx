import { FC } from 'react'
import { Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Loader from '@/components/ui/Loader'
import Catalog from '@/components/ui/catalog/Catalog'

import { useProducts } from '../home/products/useProducts'

import { useCategory } from './useCategory'

const Category: FC = () => {
	// const { category, products, isLoading } = useCategory()
	const { isLoading, products, arrBlockProducts } = useProducts()

	if (isLoading) return <Loader />
	console.log('555')
	return (
		<Layout>
			{products ? (
				<Catalog
					title={'Продукты'}
					sectionProducts={arrBlockProducts || []}
				/>
			) : (
				<Text>Такой категории нет</Text>
			)}
		</Layout>
	)
}

export default Category
