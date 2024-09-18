import { FC } from 'react'
import { Text, View } from 'react-native'

import ButtonItem from '@/components/ui/button/ButtonItem'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { ICartItem } from '@/types/cart.interface'

interface ICartActions {
	item: ICartItem
}
const CartActions: FC<ICartActions> = ({ item }) => {
	const { changeQuantity } = useActions()
	const { items } = useCart()
	const quantity = items.find(cartItem => cartItem.id === item.id)?.quantity

	return (
		<View className='mt-4 flex-row items-center gap-x-4'>
			<ButtonItem
				type='minus'
				onPress={() => changeQuantity({ id: item.id, type: 'minus' })}
				disabled={item.product.minportion === quantity}
			/>
			<Text>{quantity}</Text>
			<ButtonItem
				type='plus'
				onPress={() => changeQuantity({ id: item.id, type: 'plus' })}
			/>
		</View>
	)
}

export default CartActions
