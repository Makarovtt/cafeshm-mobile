import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useCart } from '@/hooks/useCart'

import { IProduct } from '@/types/product.interface'

import { IButton } from './button.interface'

interface Props {
	product?: IProduct
}
const Button: FC<PropsWithChildren<IButton> & Props> = ({
	product,
	children,
	disabled,
	className,
	...rest
}) => {
	const { items } = useCart()

	const currentElement = items.find(
		cartItem => cartItem.product.id === product?.id
	)
	return (
		<Pressable
			className={cn(
				'self-center mt-3.5  w-full py-3 font-light rounded-lg',
				currentElement ? 'bg-[#28a844]' : 'bg-gray-300',
				className
			)}
			disabled={disabled ? true : false}
			{...rest}
		>
			<Text
				className={cn(
					'text-center font-medium text-lg',
					currentElement ? 'text-white ' : 'text-gray-600 '
				)}
			>
				{children}
			</Text>
		</Pressable>
	)
}

export default Button
