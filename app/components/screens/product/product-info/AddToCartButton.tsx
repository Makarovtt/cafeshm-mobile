import { FC } from 'react'
import { Text, View } from 'react-native'

import Button from '@/components/ui/button/Button'
import ButtonItem from '@/components/ui/button/ButtonItem'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { IProduct } from '@/types/product.interface'

import CartActions from '../../cart/cart-item/CartActions'

interface IAddToCardButton {
	product: IProduct
}

const AddToCartButton: FC<IAddToCardButton> = ({ product }) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()
	const { changeQuantity } = useActions()

	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)
	const quantity = items.find(
		cartItem => cartItem.id === currentElement?.id
	)?.quantity

	return (
		<>
			{currentElement && (
				<View className='mt-10 flex-row items-center gap-x-4 mx-auto'>
					<ButtonItem
						type='minus'
						onPress={() =>
							changeQuantity({
								id: currentElement.id,
								type: 'minus'
							})
						}
						disabled={
							currentElement.product.minportion === quantity
						}
					/>
					<Text>{quantity}</Text>
					<ButtonItem
						type='plus'
						onPress={() =>
							changeQuantity({
								id: currentElement.id,
								type: 'plus'
							})
						}
					/>
				</View>
			)}
			<Button
				onPress={() =>
					currentElement
						? removeFromCart({ id: currentElement.id })
						: addToCart({
								product,
								price: product.price
							})
				}
				className='mt-6'
				product={product}
			>
				{currentElement ? 'В корзине' : 'Добавить'}
			</Button>
		</>
	)
}

export default AddToCartButton
