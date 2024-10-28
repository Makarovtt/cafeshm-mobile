import { FC, useState } from 'react'
import { Text, View } from 'react-native'

import Heading from '@/components/ui/Heading'
import ButtonForm from '@/components/ui/button/ButtonForm'

import { ITimeLater, TTimeReady } from '../../order-page.interface'

import ReadyNow from './ReadyNow'
import ReadyTime from './ReadyTime'

interface IProps {
	timeReady: TTimeReady
	setTimeReady: (arg0: TTimeReady) => void
	timeLater: ITimeLater
	setTimeLater: (arg0: ITimeLater) => void
}

const TimeReady: FC<IProps> = ({
	timeReady,
	setTimeReady,
	timeLater,
	setTimeLater
}) => {
	return (
		<View>
			<Heading className=''>Время получения</Heading>
			<View
				className='bg-gray-50 rounded-xl shadow-lg px-3 border border-gray-200 flex-row w-auto,
							items-center justify-start'
			>
				<ButtonForm
					className='mr-3'
					activeTab={timeReady === 'now' ? 'activeBtn' : 'waitBtn'}
					onPress={() => setTimeReady('now')}
				>
					Быстро
				</ButtonForm>
				<ButtonForm
					activeTab={timeReady === 'later' ? 'activeBtn' : 'waitBtn'}
					onPress={() => setTimeReady('later')}
				>
					Ко времени
				</ButtonForm>
			</View>

			<View className='bg-white rounded-lg border border-gray-200 shadow-lg p-3 my-4'>
				{timeReady === 'now' ? (
					<ReadyNow />
				) : (
					<ReadyTime
						timeLater={timeLater}
						setTimeLater={setTimeLater}
					/>
				)}
			</View>
		</View>
	)
}

export default TimeReady
