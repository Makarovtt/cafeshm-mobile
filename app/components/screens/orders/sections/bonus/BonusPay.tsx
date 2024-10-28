import { FC, useState } from 'react'
import { Text, View } from 'react-native'
import { Checkbox } from 'react-native-paper'

import Heading from '@/components/ui/Heading'
import ButtonForm from '@/components/ui/button/ButtonForm'

interface Iprops {
	bonus: boolean
	setBonus: (arg0: boolean) => void
}

const BonusPay: FC<Iprops> = ({ bonus, setBonus }) => {
	return (
		<View>
			<Heading>Бонусы</Heading>
			<View
				className='bg-gray-50 rounded-xl shadow-lg px-3 border border-gray-200 flex-row w-auto,
                            items-center justify-start'
			>
				<ButtonForm
					className='mr-3'
					activeTab={!bonus ? 'activeBtn' : 'waitBtn'}
					onPress={() => setBonus(false)}
				>
					Не списывать
				</ButtonForm>
				<ButtonForm
					activeTab={bonus ? 'activeBtn' : 'waitBtn'}
					onPress={() => setBonus(true)}
				>
					Списать 200
				</ButtonForm>
			</View>
		</View>
	)
}

export default BonusPay
