import { Picker } from '@react-native-picker/picker'
import { FC, useState } from 'react'
import { Text, View } from 'react-native'

import { ITimeLater } from '../../order-page.interface'

import { ORDER_DAY, ORDER_TIME } from './readytime.functions'

interface IProps {
	timeLater: ITimeLater
	setTimeLater: (arg0: ITimeLater) => void
}
const ReadyTime: FC<IProps> = ({ timeLater, setTimeLater }) => {
	const [Enable, setEnable] = useState('courses')
	const [Enable2, setEnable2] = useState('courses')

	return (
		<View>
			<Text>Укажите время когда Вы хотите получить заказ:</Text>
			<View className='justify-between w-full'>
				<Picker
					className='rounded-xl bg-red-900'
					selectedValue={timeLater.day}
					style={{
						height: 50,
						width: 250,
						backgroundColor: 'white',
						borderWidth: 1,
						borderColor: '#404040',
						borderRadius: 5
					}}
					onValueChange={itemValue =>
						setTimeLater({ ...timeLater, day: itemValue })
					}
				>
					{ORDER_DAY.map(item => (
						<Picker.Item
							key={item.date}
							label={item.title}
							value={item.date}
						/>
					))}
				</Picker>
			</View>
			<View className='justify-between w-full'>
				<Picker
					className='rounded-xl'
					selectedValue={timeLater.time}
					placeholder='время'
					style={{ height: 50, width: 250 }}
					onValueChange={itemValue =>
						setTimeLater({ ...timeLater, time: itemValue })
					}
				>
					{ORDER_TIME.map(item => (
						<Picker.Item key={item} label={item} value={item} />
					))}
				</Picker>
			</View>
		</View>
	)
}

export default ReadyTime
