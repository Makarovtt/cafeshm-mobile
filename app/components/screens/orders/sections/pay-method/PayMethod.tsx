import { FC, useState } from 'react'
import { Text, View } from 'react-native'

import Heading from '@/components/ui/Heading'
import ButtonForm from '@/components/ui/button/ButtonForm'

import { TPayMethod } from '../../order-page.interface'

import PayCash from './PayCash'
import PayOnline from './PayOnline'

interface IProps {
	payMethod: TPayMethod
	setPayMethod: (arg0: TPayMethod) => void
}

const PayMethod: FC<IProps> = ({ payMethod, setPayMethod }) => {
	return (
		<View>
			<Heading>Способ оплаты</Heading>
			<View
				className='bg-gray-50 rounded-xl shadow-lg px-3 border border-gray-200 flex-row w-auto,
								items-center justify-start'
			>
				<ButtonForm
					className='mr-3'
					activeTab={payMethod === 'cash' ? 'activeBtn' : 'waitBtn'}
					onPress={() => setPayMethod('cash')}
				>
					Наличными
				</ButtonForm>
				<ButtonForm
					activeTab={'defaultBtn'}
					onPress={() => setPayMethod('card')}
					disabled={true}
				>
					Онлайн
				</ButtonForm>
			</View>
			<View className='bg-white rounded-lg border border-gray-200 shadow-lg p-3 my-4'>
				{payMethod === 'cash' ? <PayCash /> : <PayOnline />}
			</View>
		</View>
	)
}

export default PayMethod
