import { Feather } from '@expo/vector-icons'
import Fontisto from '@expo/vector-icons/Fontisto'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { IMenuItem, TypeNavigate } from './menu.interface'

interface IMenuItemProps {
	item: IMenuItem
	nav: TypeNavigate
	currentRoute?: string
}

const MenuItem: FC<IMenuItemProps> = ({ item, nav, currentRoute }) => {
	const isActive = currentRoute === item.path
	return (
		<Pressable
			onPress={() => nav(item.path)}
			className='items-center w-[20%]'
		>
			<Feather
				name={item.icon}
				size={26}
				color={isActive ? '#d17373' : '#696969'}
			/>
			<Text className='text-xs text-gray-500'>{item.text}</Text>
		</Pressable>
	)
}

export default MenuItem
