import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { Pressable, Text, View } from 'react-native'
import { Button, ButtonProps } from 'react-native-paper'

import { useCart } from '@/hooks/useCart'

import { IProduct } from '@/types/product.interface'

import { IButton } from './button.interface'

interface Props {
	product?: IProduct
}
const MyButton: FC<ButtonProps & Props> = ({ product, children, ...rest }) => {
	const { items } = useCart()

	return (
		<Button
			className={cn('text-center font-medium text-lg')}
			mode='contained'
			buttonColor='#239631'
			style={{ borderRadius: 10 }}
			{...rest}
		>
			{children}
		</Button>
		// </Pressable>
	)
}

export default MyButton
