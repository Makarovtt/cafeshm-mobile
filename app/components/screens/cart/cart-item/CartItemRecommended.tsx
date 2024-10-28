import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { ICartItem } from '@/types/cart.interface'
import { IProduct } from '@/types/product.interface'

import { convertPrice } from '@/utils/convertPrice'

import CartActions from './CartActions'

interface ICartItemProps {
	item: IProduct
}

const CartItemRecommended: FC<ICartItemProps> = ({ item }) => {
	const { navigate } = useTypedNavigation()
	return (
		<View className='flex-row mt-5 bg-white px-2 rounded-lg grow-0 items-center'>
			<Pressable
				onPress={() => navigate('Product', { slug: item.slug })}
				className='bg-white rounded-xl overflow-hidden py-3 px-3 items-center w-28'
			>
				<Image
					// source={getMediaSource(item.product.image)}
					source={{ uri: item.image }}
					width={110}
					height={110}
					className='rounded-lg'
				/>
			</Pressable>

			<View className='ml-2 grow-0 shrink' style={{ width: '100%' }}>
				<Text
					className='font-semibold text-base'
					// style={{whitespace=''}}
					numberOfLines={2}
				>
					{item.name}
				</Text>
				<Text className='mt-1'>{convertPrice(item.price)}</Text>
				{/* <CartActions item={item} /> */}
			</View>
		</View>
	)
}

export default CartItemRecommended
