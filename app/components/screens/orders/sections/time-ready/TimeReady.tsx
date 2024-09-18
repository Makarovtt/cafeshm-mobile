import { FC, useState } from 'react'
import { Text, View } from 'react-native'

import Heading from '@/components/ui/Heading'
import ButtonForm from '@/components/ui/button/ButtonForm'

import ReadyNow from './ReadyNow'
import ReadyTime from './ReadyTime'

const TimeReady: FC = () => {
	const [isTabActive, serIsTabActive] = useState<string>('first')
	return (
		<View>
			<Heading className=''>Время получения</Heading>
			<View
				className='bg-gray-50 rounded-xl shadow-lg px-3 border border-gray-200 flex-row w-auto,
							items-center justify-start'
			>
				<ButtonForm
					className='mr-3'
					activeTab={isTabActive === 'first' ? true : false}
					onPress={() => serIsTabActive('first')}
				>
					Быстро
				</ButtonForm>
				<ButtonForm
					activeTab={isTabActive === 'second' ? true : false}
					onPress={() => serIsTabActive('second')}
				>
					Ко времени
				</ButtonForm>
			</View>

			<View className='bg-white rounded-lg border border-gray-200 shadow-lg p-3 my-4'>
				{isTabActive === 'first' ? <ReadyNow /> : <ReadyTime />}
			</View>
		</View>
	)
}

export default TimeReady
