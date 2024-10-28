import { FC, useState } from 'react'
import { Pressable, Text, Touchable, View } from 'react-native'
import { RadioButton } from 'react-native-paper'

import { TAddressCafe } from '../../order-page.interface'

interface IProps {
	addressCafe: TAddressCafe
	setAddressCafe: (arg0: TAddressCafe) => void
}
const SelfDelivery: FC<IProps> = ({ addressCafe, setAddressCafe }) => {
	// const [selectedValue, setSelectedValue] = useState('tatisheva')
	return (
		<View>
			<Text className='mb-3'>Астрахань</Text>
			<Text>Откуда удобно забрать заказ</Text>

			<View>
				<View>
					<Pressable
						onPress={() => setAddressCafe('tatisheva')}
						className='flex-row items-center'
					>
						<RadioButton.Android
							value='tatisheva'
							status={
								addressCafe === 'tatisheva'
									? 'checked'
									: 'unchecked'
							}
							onPress={() => setAddressCafe('tatisheva')}
							color='#007BFF'
						/>
						<Text>ул. Татищева, 43А</Text>
					</Pressable>
				</View>

				<View>
					<Pressable
						onPress={() => setAddressCafe('perovskoy')}
						className='flex-row items-center'
					>
						<RadioButton.Android
							value='perovskoy'
							status={
								addressCafe === 'perovskoy'
									? 'checked'
									: 'unchecked'
							}
							onPress={() => setAddressCafe('perovskoy')}
							color='#007BFF'
						/>
						<Text>ул. Софьи Перовской, 98ж/2</Text>
					</Pressable>
				</View>

				<View>
					<Pressable
						onPress={() => setAddressCafe('brestskaya')}
						className='flex-row items-center'
					>
						<RadioButton.Android
							value='brestskaya'
							status={
								addressCafe === 'brestskaya'
									? 'checked'
									: 'unchecked'
							}
							onPress={() => setAddressCafe('brestskaya')}
							color='#007BFF'
						/>
						<Text>ул. Брестская, 26б</Text>
					</Pressable>
				</View>

				<View>
					<Pressable
						onPress={() => setAddressCafe('nikolaevskoe')}
						className='flex-row items-center'
					>
						<RadioButton.Android
							value='nikolaevskoe'
							status={
								addressCafe === 'nikolaevskoe'
									? 'checked'
									: 'unchecked'
							}
							onPress={() => setAddressCafe('nikolaevskoe')}
							color='#007BFF'
						/>
						<Text>ул. Николаевское шоссе, 1г</Text>
					</Pressable>
				</View>
			</View>
		</View>
	)
}

export default SelfDelivery
