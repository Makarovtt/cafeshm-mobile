import { FC, useState } from 'react'

import Loader from '@/components/ui/Loader'
import Catalog from '@/components/ui/catalog/Catalog'

import HomeCatalog from '../HomeCatalog'

import { useProducts } from './useProducts'

const Products: FC = () => {
	const { isLoading, products } = useProducts()
	return isLoading ? (
		<Loader />
	) : (
		<HomeCatalog
			title='Популярное'
			products={products?.slice(0, 4) || []}
		/>
	)
}

export default Products
