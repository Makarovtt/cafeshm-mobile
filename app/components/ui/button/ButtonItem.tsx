import { AntDesign } from '@expo/vector-icons'
import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { Pressable, Text, View } from 'react-native'

import { IButton, TypeButtonItem } from './button.interface'

const ButtonItem: FC<TypeButtonItem & PropsWithChildren<IButton>> = ({
	type,
	children,
	activeTab,
	disabled,
	className,
	...rest
}) => {
	const active = 'bg-[#ffffff] border border-gray-300'
	return (
		<Pressable
			className={cn(
				'self-center py-1 font-light rounded-lg w-10 h-7 flex items-center justify-center',
				'px-3 my-2 transition-all',
				disabled
					? 'bg-gray-300 text-gray-700'
					: 'bg-green-600 text-white',
				className,
				activeTab ? active : null
			)}
			disabled={disabled ? true : false}
			{...rest}
		>
			{type === 'plus' ? (
				<AntDesign
					name='plus'
					size={15}
					color={disabled ? 'gray' : 'white'}
				/>
			) : (
				<AntDesign
					name='minus'
					size={15}
					color={disabled ? 'gray' : 'white'}
				/>
			)}
		</Pressable>
	)
}

export default ButtonItem
