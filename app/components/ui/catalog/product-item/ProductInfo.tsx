import { FC } from 'react'
import { Text, View } from 'react-native'

import { IProduct } from '@/types/product.interface'

import { convertPrice } from '@/utils/convertPrice'

import ButtonCart from '../../button/ButtonCart'

interface Props {
	product: IProduct
}
const ProductInfo: FC<Props> = ({ product }) => {
	return (
		<View className='my-3 flex-col flex justify-between mt-auto'>
			<View className='flex-row justify-between items-end mt-auto'>
				{/* <Text className='py-1.5'>{product.category.name}</Text> */}
				<Text className='py-1.5'>
					{product.volume} {product.unit}
				</Text>
				<Text
					className='mt-1 font-normal text-center py-0.5 rounded-full
							text-lg	text-black whitespace-nowrap'
					numberOfLines={1}
				>
					{convertPrice(product.price)}
				</Text>
			</View>
			<ButtonCart product={product} className='' />
		</View>
	)
}

export default ProductInfo
