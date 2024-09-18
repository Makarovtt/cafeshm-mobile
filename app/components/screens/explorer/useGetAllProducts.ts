import { useQuery } from '@tanstack/react-query'

import { IBlockProducts } from '@/components/ui/catalog/catalog.interface'

import { ProductService } from '@/services/product.service'

export const useGetAllProducts = () => {
	const { data: products, isLoading } = useQuery({
		queryKey: ['get all products'],
		queryFn: () => ProductService.getAll(),
		select: data => data
	})
	const allCategories: Array<string> = []

	const arr = products?.map(item => {
		if (allCategories.includes(item.category.name)) {
		} else {
			allCategories.push(item.category.name)
		}
	})

	const arrBlockProducts: Array<IBlockProducts> = []
	if (products) {
		for (let category of allCategories) {
			const itemCategory = products.filter(
				item => item.category.name === category
			)
			arrBlockProducts.push({
				name: category,
				blockProducts: itemCategory
			})
		}
	}

	return { products, isLoading, arrBlockProducts }
}
