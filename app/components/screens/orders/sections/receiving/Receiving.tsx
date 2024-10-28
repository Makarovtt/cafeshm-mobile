import { FC, useState } from 'react'
import { Text, View } from 'react-native'

import Heading from '@/components/ui/Heading'
import ButtonForm from '@/components/ui/button/ButtonForm'

import {
	IAddressDelivery,
	TAddressCafe,
	TReceivingMethod
} from '../../order-page.interface'

import DeliveryNote from './DeliveryNote'
import SelfDelivery from './SelfDelivery'

interface IProps {
	receivingMethod: TReceivingMethod
	setReceivingMethod: (arg0: TReceivingMethod) => void
	addressCafe: TAddressCafe
	setAddressCafe: (arg0: TAddressCafe) => void
	addressDelivery: IAddressDelivery
	setAddressDelivery: (arg0: IAddressDelivery) => void
}
const Receiving: FC<IProps> = ({
	setReceivingMethod,
	receivingMethod,
	addressCafe,
	setAddressCafe,
	addressDelivery,
	setAddressDelivery
}) => {
	return (
		<View>
			<Heading>Способ доставки</Heading>
			<View
				className='bg-gray-50 rounded-xl shadow-lg px-3 border border-gray-200 flex-row w-auto,
								items-center justify-start'
			>
				<ButtonForm
					className='mr-3'
					activeTab={
						receivingMethod === 'self' ? 'activeBtn' : 'waitBtn'
					}
					onPress={() => setReceivingMethod('self')}
				>
					Сомовывоз
				</ButtonForm>
				<ButtonForm
					activeTab={
						receivingMethod === 'delivery' ? 'activeBtn' : 'waitBtn'
					}
					onPress={() => setReceivingMethod('delivery')}
				>
					Доставка
				</ButtonForm>
			</View>
			<View className='bg-white rounded-lg border border-gray-200 shadow-lg p-3 my-4'>
				{receivingMethod === 'self' ? (
					<SelfDelivery
						addressCafe={addressCafe}
						setAddressCafe={setAddressCafe}
					/>
				) : (
					<DeliveryNote
						addressDelivery={addressDelivery}
						setAddressDelivery={setAddressDelivery}
					/>
				)}
			</View>
		</View>
	)
}

export default Receiving
