import { FC, useState } from 'react'
import { Pressable, Text, Touchable, View } from 'react-native'
import { RadioButton } from 'react-native-paper'

const SelfDelivery: FC = () => {
	const [selectedValue, setSelectedValue] = useState('option1')
	return (
		<View>
			<Text className='mb-3'>Астрахань</Text>
			<Text>Откуда удобно забрать заказ</Text>

			<View>
				<View>
					<Pressable
						onPress={() => setSelectedValue('option1')}
						className='flex-row items-center'
					>
						<RadioButton.Android
							value='option1'
							status={
								selectedValue === 'option1'
									? 'checked'
									: 'unchecked'
							}
							onPress={() => setSelectedValue('option1')}
							color='#007BFF'
						/>
						<Text>ул. Татищева, 43А</Text>
					</Pressable>
				</View>

				<View>
					<Pressable
						onPress={() => setSelectedValue('option2')}
						className='flex-row items-center'
					>
						<RadioButton.Android
							value='option2'
							status={
								selectedValue === 'option2'
									? 'checked'
									: 'unchecked'
							}
							onPress={() => setSelectedValue('option2')}
							color='#007BFF'
						/>
						<Text>ул. Софьи Перовской, 98ж/2</Text>
					</Pressable>
				</View>

				<View>
					<Pressable
						onPress={() => setSelectedValue('option3')}
						className='flex-row items-center'
					>
						<RadioButton.Android
							value='option3'
							status={
								selectedValue === 'option3'
									? 'checked'
									: 'unchecked'
							}
							onPress={() => setSelectedValue('option3')}
							color='#007BFF'
						/>
						<Text>ул. Брестская, 26б</Text>
					</Pressable>
				</View>

				<View>
					<Pressable
						onPress={() => setSelectedValue('option4')}
						className='flex-row items-center'
					>
						<RadioButton.Android
							value='option4'
							status={
								selectedValue === 'option4'
									? 'checked'
									: 'unchecked'
							}
							onPress={() => setSelectedValue('option4')}
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
