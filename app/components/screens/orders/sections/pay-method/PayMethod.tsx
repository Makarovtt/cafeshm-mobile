import { FC, useState } from 'react'
import { Text, View } from 'react-native'

import Heading from '@/components/ui/Heading'
import ButtonForm from '@/components/ui/button/ButtonForm'

import PayCash from './PayCash'
import PayOnline from './PayOnline'

const PayMethod: FC = () => {
	const [isTabActive, serIsTabActive] = useState<string>('first')
	return (
		<View>
			<Heading>Способ оплаты</Heading>
			<View
				className='bg-gray-50 rounded-xl shadow-lg px-3 border border-gray-200 flex-row w-auto,
								items-center justify-start'
			>
				<ButtonForm
					className='mr-3'
					activeTab={isTabActive === 'first' ? true : false}
					onPress={() => serIsTabActive('first')}
				>
					Онлайн
				</ButtonForm>
				<ButtonForm
					activeTab={isTabActive === 'second' ? true : false}
					onPress={() => serIsTabActive('second')}
				>
					Наличными
				</ButtonForm>
			</View>
			<View className='bg-white rounded-lg border border-gray-200 shadow-lg p-3 my-4'>
				{isTabActive === 'first' ? <PayOnline /> : <PayCash />}
			</View>
		</View>
	)
}

export default PayMethod
