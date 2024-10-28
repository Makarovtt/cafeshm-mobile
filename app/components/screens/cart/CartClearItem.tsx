import { FC } from 'react'
import { Text, View } from 'react-native'

import Heading from '@/components/ui/Heading'
import ButtonForm from '@/components/ui/button/ButtonForm'

import { useActions } from '@/hooks/useActions'

import { ICartItem } from '@/types/cart.interface'

interface Iprops {
	onclose: () => void
	item: ICartItem
}

const CartClearItem: FC<Iprops> = ({ onclose, item }) => {
	const clearCartItem = (id: string) => {
		removeFromCart({ id })
		onclose()
	}
	const { removeFromCart } = useActions()
	return (
		<View className='px-5'>
			<View className='text-center text-base my-4'>
				<Text className='text-center'>Удалить из корзины</Text>
				<Text className='font-bold text-center'>
					{item.product.name}?
				</Text>
			</View>
			<View
				className='flex-row justify-center items-center gap-3'
				style={{ gap: 30 }}
			>
				<ButtonForm activeTab='defaultBtn' onPress={onclose}>
					Отмена
				</ButtonForm>
				<ButtonForm
					activeTab='deleteBtn'
					onPress={() => clearCartItem(item.id)}
				>
					Удалить
				</ButtonForm>
			</View>
		</View>
	)
}

export default CartClearItem
