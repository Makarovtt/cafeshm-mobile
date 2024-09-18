import { FC, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Button from '@/components/ui/button/Button'

import { useAuth } from '@/hooks/useAuth'
import { useCart } from '@/hooks/useCart'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { convertPrice } from '@/utils/convertPrice'

import Auth from '../auth/Auth'
import ProductButton from '../product/ProductButton'

import BonusPay from './sections/bonus/BonusPay'
import PayMethod from './sections/pay-method/PayMethod'
import Receiving from './sections/receiving/Receiving'
import TimeReady from './sections/time-ready/TimeReady'

const OrderPage: FC = () => {
	const [isTabActive, serIsTabActive] = useState('first')
	const { items, total, totalBonus } = useCart()
	const { user } = useAuth()
	const { goBack } = useTypedNavigation()

	console.log(total, totalBonus)
	return (
		<Layout>
			<ScrollView className='px-3'>
				{user ? (
					<View className='mb-10'>
						<View className='flex-row items-center mt-2'>
							<ProductButton
								onPress={goBack}
								icon='chevron-left'
								iconSize={26}
								color='#555'
							/>
							<Text className='mt-6 ml-8 text-xl text-center mb-5 font-semibold'>
								Оформление заказа
							</Text>
						</View>
						<Receiving />
						<TimeReady />
						<BonusPay
							serIsTabActive={serIsTabActive}
							isTabActive={isTabActive}
						/>
						<PayMethod />
						<Button className='mt-10'>
							Оплатить{' '}
							{convertPrice(
								isTabActive === 'first' ? total : totalBonus
							)}
						</Button>
					</View>
				) : (
					<View className='mt-10'>
						<Auth />
					</View>
				)}
			</ScrollView>
		</Layout>
	)
}

export default OrderPage
