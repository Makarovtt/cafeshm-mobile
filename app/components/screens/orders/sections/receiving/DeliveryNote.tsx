import { FC } from 'react'
import { Text, View } from 'react-native'
import { Checkbox } from 'react-native-paper'

import InputForm from '@/components/ui/input/InputForm'

import { IAddressDelivery } from '../../order-page.interface'

interface IProps {
	addressDelivery: IAddressDelivery
	setAddressDelivery: (arg0: IAddressDelivery) => void
}

const DeliveryNote: FC<IProps> = ({ addressDelivery, setAddressDelivery }) => {
	return (
		<View>
			<Text>Укажите адрес доставки</Text>

			<View className='my-1'>
				<InputForm
					placeholder='Улица'
					value={addressDelivery.street}
					onChangeText={value =>
						setAddressDelivery({
							...addressDelivery,
							street: value
						})
					}
				/>
			</View>
			<View className='my-1'>
				<InputForm
					placeholder='Номер дома'
					value={addressDelivery.home}
					onChangeText={value =>
						setAddressDelivery({ ...addressDelivery, home: value })
					}
				/>
			</View>
			<View className='w-[200px]'>
				<Checkbox.Item
					status={
						addressDelivery.privateHome ? 'checked' : 'unchecked'
					}
					onPress={() => {
						const now = !addressDelivery.privateHome
						setAddressDelivery({
							...addressDelivery,
							privateHome: now
						})
					}}
					position='leading'
					uncheckedColor='#999'
					label='Частный дом'
					labelStyle={{
						color: addressDelivery.privateHome ? '#555' : '#999',
						textAlign: 'left'
					}}
					color='#55b3d8'
				/>
			</View>
			{addressDelivery.privateHome ? null : (
				<View className='flex-row justify-between'>
					<InputForm
						className='my-1'
						placeholder='№ Кв.'
						value={addressDelivery.room}
						onChangeText={str =>
							setAddressDelivery({
								...addressDelivery,
								room: str
							})
						}
					/>
					<InputForm
						className='my-1'
						placeholder='Подъезд'
						value={addressDelivery.podyezd}
						onChangeText={str =>
							setAddressDelivery({
								...addressDelivery,
								podyezd: str
							})
						}
					/>
					<InputForm
						className='my-1'
						placeholder='Этаж'
						value={addressDelivery.level}
						onChangeText={str =>
							setAddressDelivery({
								...addressDelivery,
								level: str
							})
						}
					/>
				</View>
			)}

			<View>
				<InputForm
					multiline={true}
					placeholder='Комментарии'
					value={addressDelivery.comment}
					onChangeText={comment =>
						setAddressDelivery({
							...addressDelivery,
							comment: comment
						})
					}
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
