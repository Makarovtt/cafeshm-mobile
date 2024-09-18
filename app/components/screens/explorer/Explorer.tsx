import { FC } from 'react'
import { Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Loader from '@/components/ui/Loader'
import Catalog from '@/components/ui/catalog/Catalog'

import { useGetAllProducts } from './useGetAllProducts'

const Explorer: FC = () => {
	const { products, isLoading, arrBlockProducts } = useGetAllProducts()
	return (
		<Layout>
			{isLoading ? (
				<Loader />
			) : (
				<Catalog
					title='Explorer'
					sectionProducts={arrBlockProducts || []}
				/>
			)}
		</Layout>
	)
}

export default Explorer
