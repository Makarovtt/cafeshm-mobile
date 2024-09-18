import { FC, useState } from 'react'
import { Text, View } from 'react-native'

import Heading from '@/components/ui/Heading'
import ButtonForm from '@/components/ui/button/ButtonForm'

import DeliveryNote from './DeliveryNote'
import SelfDelivery from './SelfDelivery'

const Receiving: FC = () => {
	const [isTabActive, serIsTabActive] = useState<string>('first')
	return (
		<View>
			<Heading>Способ доставки</Heading>
			<View
				className='bg-gray-50 rounded-xl shadow-lg px-3 border border-gray-200 flex-row w-auto,
								items-center justify-start'
			>
				<ButtonForm
					className='mr-3'
					activeTab={isTabActive === 'first' ? true : false}
					onPress={() => serIsTabActive('first')}
				>
					Сомовывоз
				</ButtonForm>
				<ButtonForm
					activeTab={isTabActive === 'second' ? true : false}
					onPress={() => serIsTabActive('second')}
				>
					Доставка
				</ButtonForm>
			</View>
			<View className='bg-white rounded-lg border border-gray-200 shadow-lg p-3 my-4'>
				{isTabActive === 'first' ? <SelfDelivery /> : <DeliveryNote />}
			</View>
		</View>
	)
}

export default Receiving
