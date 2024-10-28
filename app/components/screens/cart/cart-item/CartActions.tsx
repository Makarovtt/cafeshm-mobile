import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { FC, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { Modal, ModalContent, SlideAnimation } from 'react-native-modals'

import ButtonItem from '@/components/ui/button/ButtonItem'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { ICartItem } from '@/types/cart.interface'

import CartClearItem from '../CartClearItem'

interface ICartActions {
	item: ICartItem
}
const CartActions: FC<ICartActions> = ({ item }) => {
	const { changeQuantity } = useActions()
	const { items } = useCart()
	const quantity = items.find(cartItem => cartItem.id === item.id)?.quantity

	const [isModalVisible, setIsModalVisible] = useState(false)
	const onModalClose = () => {
		setIsModalVisible(false)
	}
	const onModalOpen = () => {
		setIsModalVisible(true)
	}

	return (
		<>
			<View className='mt-1 flex-row justify-between items-center gap-x-1'>
				<View className='flex-row items-center gap-x-4'>
					<ButtonItem
						type='minus'
						onPress={() =>
							changeQuantity({ id: item.id, type: 'minus' })
						}
						disabled={item.product.minportion === quantity}
					/>
					<Text>{quantity}</Text>
					<ButtonItem
						type='plus'
						onPress={() =>
							changeQuantity({ id: item.id, type: 'plus' })
						}
					/>
				</View>
				<View>
					<Pressable className='text-red-400' onPress={onModalOpen}>
						<FontAwesome5 name='trash' size={24} color='#f87171' />
					</Pressable>
				</View>
			</View>
			<Modal
				visible={isModalVisible}
				onTouchOutside={onModalClose}
				modalAnimation={
					new SlideAnimation({
						slideFrom: 'top'
					})
				}
			>
				<ModalContent>
					<CartClearItem onclose={onModalClose} item={item} />
				</ModalContent>
			</Modal>
		</>
	)
}

export default CartActions
