import { FC } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Loader from '@/components/ui/Loader'

import { getMediaSource } from '@/utils/getMediaSource'

import ProductHeader from './ProductHeader'
import AddToCartButton from './product-info/AddToCartButton'
import ProductInfo from './product-info/ProductInfo'
import { useProduct } from './useProduct'

const Product: FC = () => {
	const { isLoading, product } = useProduct()

	if (isLoading) return <Loader />
	if (!product) return null

	return (
		<Layout>
			<ScrollView className='px-3'>
				<ProductHeader product={product} />
				<View className='items-center justify-center mt-4'>
					<Image
						// source={getMediaSource(product.image)}
						source={{ uri: product.image }}
						className='rounded-lg w-full h-[300px]'
					/>
				</View>
				<ProductInfo product={product} />
				<AddToCartButton product={product} />
			</ScrollView>
		</Layout>
	)
}

export default Product
