import { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'

import { IProduct } from '@/types/product.interface'

import { ICatalogSearch } from './catalog.interface'
import ProductItem from './product-item/ProductItem'

const CatalogSearch: FC<ICatalogSearch> = ({ title, products }) => {
	// const { categories, isLoading } = useGetAllCategories()
	// const { navigate } = useTypedNavigation()

	return (
		<ScrollView stickyHeaderIndices={[0]}>
			{/* {title && <Heading>{title}</Heading>} */}
			<View
				style={{ gap: 10 }}
				className='flex-row justify-start w-full flex-wrap mt-2'
			>
				{products ? (
					products.map((item: IProduct) => {
						return <ProductItem key={item.id} product={item} />
					})
				) : (
					<Text className='mt-2'>Продуктов нет</Text>
				)}
			</View>
		</ScrollView>
	)
}

export default CatalogSearch
