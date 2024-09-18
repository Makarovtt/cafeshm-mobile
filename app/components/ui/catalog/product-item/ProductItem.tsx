import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { IProduct } from '@/types/product.interface'

import { getMediaSource } from '@/utils/getMediaSource'

import ProductInfo from './ProductInfo'

interface Props {
	product: IProduct
}

const ProductItem: FC<Props> = ({ product }) => {
	const { navigate } = useTypedNavigation()
	return (
		<View
			className='rounded-lg flex-col max-w-[300px] w-[48%] p-2 bg-white border border-gray-200 shadow
						max-h-[300px]'
			style={{
				shadowColor: '#171717',
				shadowOffset: { width: -2, height: 4 },
				shadowOpacity: 0.2,
				shadowRadius: 3
			}}
		>
			<Pressable
				onPress={() => navigate('Product', { slug: product.slug })}
				className='bg-gray-100 rounded-xl relative overflow-hidden flex items-center justify-center
							w-full h-[110px]'
			>
				<Image
					// source={getMediaSource(product.image)}
					source={{ uri: product.image }}
					className='w-full h-full object-cover'
				/>
			</Pressable>
			<ProductInfo product={product} />
		</View>
	)
}

export default ProductItem
