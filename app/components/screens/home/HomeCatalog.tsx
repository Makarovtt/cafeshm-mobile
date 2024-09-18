import { FC } from 'react'
import { Text, View } from 'react-native'

import Heading from '@/components/ui/Heading'
import ProductItem from '@/components/ui/catalog/product-item/ProductItem'

import { IProduct } from '@/types/product.interface'

interface ICatalogHome {
	title?: string
	products: IProduct[]
}

const HomeCatalog: FC<ICatalogHome> = ({ title, products }) => {
	return (
		<View className='mb-16 mt-5'>
			{title && <Heading>{title}</Heading>}

			{products?.length ? (
				<View
					className='flex flex-row justify-left flex-wrap mt-2'
					style={{ gap: 10 }}
				>
					{products.map((item: IProduct) => {
						return <ProductItem key={item.id} product={item} />
					})}
				</View>
			) : (
				<Text className='mt-2'>Продуктов нет</Text>
			)}
		</View>
	)
}

export default HomeCatalog
