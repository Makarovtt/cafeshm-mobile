import axios from 'axios'
import { FC, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import MyButton from '@/components/ui/button/Button'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useCart } from '@/hooks/useCart'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { convertPrice } from '@/utils/convertPrice'

import Auth from '../auth/Auth'
import ProductButton from '../product/ProductButton'
import { useProfile } from '../profile/useProfile'

import {
	IAddressDelivery,
	ITimeLater,
	TAddressCafe,
	TPayMethod,
	TReceivingMethod,
	TTimeReady
} from './order-page.interface'
import BonusPay from './sections/bonus/BonusPay'
import PayMethod from './sections/pay-method/PayMethod'
import Receiving from './sections/receiving/Receiving'
import TimeReady from './sections/time-ready/TimeReady'

export const SERVER_URL_PAYORDER = process.env.SERVER_URL_PAYORDER

const URLSendMail = `http://5.35.87.23:3030/mailto/mobile_payorder.php`

const OrderPage: FC = () => {
	//-----
	const [receivingMethod, setReceivingMethod] =
		useState<TReceivingMethod>('self')
	const [addressCafe, setAddressCafe] = useState<TAddressCafe>('tatisheva')
	const [addressDelivery, setAddressDelivery] = useState<IAddressDelivery>(
		{} as IAddressDelivery
	)
	const [timeReady, setTimeReady] = useState<TTimeReady>('now')
	const [timeLater, setTimeLater] = useState<ITimeLater>({} as ITimeLater)
	const [bonus, setBonus] = useState<boolean>(false)
	const [payMethod, setPayMethod] = useState<TPayMethod>('cash')
	const { profile } = useProfile()
	//------------
	const [errorServer, setErrorServer] = useState<string>('')
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [orderCheck, setOrderCheck] = useState<boolean>(false)

	const { items, total, totalBonus } = useCart()
	const { user } = useAuth()
	const { goBack, navigate } = useTypedNavigation()
	const { reset } = useActions()

	async function payOrder() {
		setIsLoading(true)
		const dataForm = new FormData()
		dataForm.append('phone', String(profile?.phone))
		dataForm.append('receivingMethod', receivingMethod)
		if (receivingMethod === 'self') {
			dataForm.append('addressCafe', addressCafe)
		} else {
			dataForm.append('addressDelivery', JSON.stringify(addressDelivery))
		}
		dataForm.append('timeReady', timeReady)
		if (timeReady === 'later') {
			dataForm.append('timeLater', JSON.stringify(timeLater))
		}
		dataForm.append('bonus', String(bonus))
		dataForm.append('payMethod', payMethod)
		const summa = bonus ? totalBonus : total
		dataForm.append('summa', String(summa))
		dataForm.append('bonus', String(bonus))
		dataForm.append('valueBonus', '200')
		dataForm.append('order', JSON.stringify(items))
		await axios
			.post(URLSendMail, dataForm, {
				headers: {
					'content-type': 'multipart/form-data'
				}
			})
			.then(res => {
				if (res.data.code === '1') {
					setErrorServer('')
					// 	// setCheckResultOrder(true)
					if (payMethod === 'cash') {
						// onOpen()
					} else if (payMethod === 'card') {
						// navigate(res.data.url)
						// router.push(res.data.url)
					}
					reset()
					setOrderCheck(true)
				} else {
					setErrorServer(res.data)
					// 	// onOpen()
				}
				setIsLoading(false)
			})
			.catch(error => {
				console.log(error)
			})
	}
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
						{orderCheck ? (
							<View>
								<Text>Спасибо, Ваш заказ принят. Ожидайте</Text>
							</View>
						) : (
							<>
								<Receiving
									setReceivingMethod={setReceivingMethod}
									receivingMethod={receivingMethod}
									addressCafe={addressCafe}
									setAddressCafe={setAddressCafe}
									addressDelivery={addressDelivery}
									setAddressDelivery={setAddressDelivery}
								/>
								<TimeReady
									timeReady={timeReady}
									setTimeReady={setTimeReady}
									timeLater={timeLater}
									setTimeLater={setTimeLater}
								/>
								<BonusPay bonus={bonus} setBonus={setBonus} />
								<PayMethod
									payMethod={payMethod}
									setPayMethod={setPayMethod}
								/>
								{errorServer && (
									<View className='mt-2'>
										<Text className='text-red-500'>
											* {errorServer}
										</Text>
									</View>
								)}
								<MyButton
									className='mt-10'
									onPress={payOrder}
									loading={isLoading}
									disabled={total < 1000 ? true : false}
								>
									Оплатить{' '}
									{convertPrice(bonus ? totalBonus : total)}
								</MyButton>
							</>
						)}
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
