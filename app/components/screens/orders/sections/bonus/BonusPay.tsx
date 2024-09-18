import { FC, useState } from 'react'
import { Text, View } from 'react-native'
import { Checkbox } from 'react-native-paper'

import Heading from '@/components/ui/Heading'
import ButtonForm from '@/components/ui/button/ButtonForm'

interface Iprops {
	isTabActive: string
	serIsTabActive: (arg0: string) => void
}

const BonusPay: FC<Iprops> = ({ isTabActive, serIsTabActive }) => {
	return (
		<View>
			<Heading>Бонусы</Heading>
			<View
				className='bg-gray-50 rounded-xl shadow-lg px-3 border border-gray-200 flex-row w-auto,
                            items-center justify-start'
			>
				<ButtonForm
					className='mr-3'
					activeTab={isTabActive === 'first' ? true : false}
					onPress={() => serIsTabActive('first')}
				>
					Не списывать
				</ButtonForm>
				<ButtonForm
					activeTab={isTabActive === 'second' ? true : false}
					onPress={() => serIsTabActive('second')}
				>
					Списать 200
				</ButtonForm>
			</View>
		</View>
	)
}

export default BonusPay
