import { FC, useState } from 'react'
import { Text, View } from 'react-native'
import { Checkbox } from 'react-native-paper'

import InputForm from '@/components/ui/input/InputForm'

interface Iaddress {
	street: string
	home: string
	room: string
	podyezd: string
	floor: string
}

const DeliveryNote: FC = () => {
	const [text, setText] = useState({} as Iaddress)
	const [comment, setComment] = useState('')
	const [checked, setChecked] = useState(false)
	return (
		<View>
			<Text>Укажите адрес доставки</Text>

			<View>
				<InputForm
					placeholder='Улица'
					value={text.street}
					onChangeText={value => setText({ ...text, street: value })}
				/>
			</View>
			<View>
				<InputForm
					placeholder='Номер дома'
					value={text.home}
					onChangeText={value => setText({ ...text, home: value })}
				/>
			</View>
			<View className='w-[200px]'>
				<Checkbox.Item
					status={checked ? 'checked' : 'unchecked'}
					onPress={() => {
						setChecked(!checked)
					}}
					position='leading'
					label='Частный дом'
					color='#6b90e5'
				/>
			</View>
			{checked ? null : (
				<View className='flex-row justify-between'>
					<InputForm
						className=''
						placeholder='№ Кв.'
						value={text.room}
						onChangeText={str => setText({ ...text, room: str })}
					/>
					<InputForm
						placeholder='Подъезд'
						value={text.podyezd}
						onChangeText={str => setText({ ...text, podyezd: str })}
					/>
					<InputForm
						placeholder='Этаж'
						value={text.floor}
						onChangeText={str => setText({ ...text, floor: str })}
					/>
				</View>
			)}

			<View>
				<InputForm
					multiline={true}
					placeholder='Комментарии'
					value={comment}
					onChangeText={comment => setComment(comment)}
				/>
			</View>
			<View>
				<Text className='text-xs italic text-gray-500 mt-3'>
					* Вы можете не заполнять эти поля если еще не знаете куда
					осуществить доставку. Наш менеджер свяжется с Вами и обсудит
					все условия доставки
				</Text>
				<Text className='text-xs italic text-red-500 mt-3'>
					* Доставка ДО МОСТОВ: Новый мост, старый мост, Мост на
					Латышева, Мясокомбинатский мост, Кубанский мост, Милицеский
					мост. А ТАКЖЕ до направлений: Аэропортовское шоссе, «Три
					протока» и «Новоначалово» — БЕСПЛАТНО. Стоимость доставки в
					перечисленные места оговаривается отдельно с менеджером
				</Text>
			</View>
		</View>
	)
}

export default DeliveryNote
