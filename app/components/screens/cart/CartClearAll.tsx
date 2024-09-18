import { FC } from 'react'
import { Text, View } from 'react-native'

import Heading from '@/components/ui/Heading'
import ButtonForm from '@/components/ui/button/ButtonForm'

import { useActions } from '@/hooks/useActions'

interface Iprops {
	onclose: () => void
}

const CartClearAll: FC<Iprops> = ({ onclose }) => {
	const clearCatr = () => {
		reset()
		onclose()
	}
	const { reset } = useActions()
	return (
		<View className='px-5'>
			<Heading isCenter>Очистить корзину?</Heading>
			<View
				className='flex-row justify-center items-center gap-3'
				style={{ gap: 30 }}
			>
				<ButtonForm activeTab='defaultBtn' onPress={onclose}>
					Отмена
				</ButtonForm>
				<ButtonForm activeTab='deleteBtn' onPress={clearCatr}>
					Очистить
				</ButtonForm>
			</View>
		</View>
	)
}

export default CartClearAll
