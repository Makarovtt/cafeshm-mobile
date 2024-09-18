import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { ICartItem } from '@/types/cart.interface'

import { convertPrice } from '@/utils/convertPrice'

import CartActions from './CartActions'

interface ICartItemProps {
	item: ICartItem
}

const CartItem: FC<ICartItemProps> = ({ item }) => {
	const { navigate } = useTypedNavigation()
	return (
		<View className='flex-row mt-5 bg-white px-2 rounded-lg'>
			<Pressable
				onPress={() => navigate('Product', { slug: item.product.slug })}
				className='bg-white rounded-xl overflow-hidden py-3 px-3 items-center w-28'
			>
				<Image
					// source={getMediaSource(item.product.image)}
					source={{ uri: item.product.image }}
					width={110}
					height={110}
					className='rounded-lg'
				/>
			</Pressable>

			<View className='ml-5 mt-2'>
				<Text
					className='font-semibold text-base whitespace-normal'
					numberOfLines={2}
				>
					{item.product.name}
				</Text>
				<Text className='mt-1'>{convertPrice(item.price)}</Text>
				<CartActions item={item} />
			</View>
		</View>
	)
}

export default CartItem
