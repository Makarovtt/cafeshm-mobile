import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { Pressable, Text, View } from 'react-native'

import { IProductComponent } from '@/components/screens/product/product-page.interface'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { IProduct } from '@/types/product.interface'

import { IButton } from './button.interface'

interface Props {
	product: IProduct
}
const ButtonCart: FC<
	Props & PropsWithChildren<IButton> & IProductComponent
> = ({ product, children, className, ...rest }) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)
	return (
		<Pressable
			onPress={() =>
				currentElement
					? removeFromCart({ id: currentElement.id })
					: addToCart({ product, quantity: 1, price: product.price })
			}
			className={cn(
				'self-center mt-3.5 w-full py-1 font-light rounded-lg',
				currentElement ? 'bg-[#239631]' : 'bg-[#cccccc]',
				className
			)}
			{...rest}
		>
			<Text
				className={cn(
					'text-white text-center font-medium text-base',
					currentElement ? ' text-white' : ' text-black font-light'
				)}
			>
				{currentElement ? 'В корзине' : 'Добавить'}
			</Text>
		</Pressable>
	)
}

export default ButtonCart
