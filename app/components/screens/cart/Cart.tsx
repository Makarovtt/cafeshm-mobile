import { FC, useState } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { Modal, ModalContent, SlideAnimation } from 'react-native-modals'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'
import Button from '@/components/ui/button/Button'

import { useCart } from '@/hooks/useCart'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { convertPrice } from '@/utils/convertPrice'

import CartClearAll from './CartClearAll'
import CartItem from './cart-item/CartItem'
import { useCheckout } from './useCheckout'

const Cart: FC = () => {
	const [showAppOptions, setShowAppOptions] = useState(false)
	const [isModalVisible, setIsModalVisible] = useState(false)

	const { items, total } = useCart()
	const { onCheckout } = useCheckout()
	const { navigate } = useTypedNavigation()

	const onModalClose = () => {
		setIsModalVisible(false)
	}
	const onModalOpen = () => {
		setIsModalVisible(true)
	}
	return (
		<>
			<Layout>
				<ScrollView className='px-3 mb-32'>
					<View className='flex-row justify-between items-center'>
						<Heading>Корзина</Heading>
						{items.length ? (
							<Pressable onPress={onModalOpen}>
								<Text>Очистить корзину</Text>
							</Pressable>
						) : null}
					</View>
					{items.length ? (
						items.map(item => (
							<CartItem key={item.id} item={item} />
						))
					) : (
						<Text className='mt-2'>Корзина пуста</Text>
					)}
				</ScrollView>

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
						<CartClearAll onclose={onModalClose} />
					</ModalContent>
				</Modal>
			</Layout>
			{items.length ? (
				<View className='bottom-1 absolute w-full px-3 bg-white p-2'>
					<Text className='font-bold text-xl'>
						Всего: {convertPrice(total)}
					</Text>
					{total < 1000 && (
						<Text className='font-light text-sm text-red-700'>
							* Минимальная сумма заказа 1000р
						</Text>
					)}
					<Button
						onPress={() => navigate('Order')}
						disabled={total < 1000 ? true : false}
					>
						Оформить заказ
					</Button>
				</View>
			) : null}
		</>
	)
}

export default Cart
