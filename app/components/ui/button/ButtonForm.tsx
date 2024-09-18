import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { Pressable, Text, View } from 'react-native'

import { IButton } from './button.interface'

const ButtonForm: FC<PropsWithChildren<IButton>> = ({
	children,
	activeTab,
	className,
	...rest
}) => {
	const activeBtn = 'bg-[#ffffff] border border-gray-300 text-gray-700'
	const defaultBtn = 'bg-[#c4c4c4] border border-gray-300 text-gray-700'
	const deleteBtn = 'bg-[#d73e3e] border border-red-200 text-white'
	const premiertBtn = 'bg-[#0d8abc] border border-red-200 text-white'
	return (
		<Pressable className={className} {...rest}>
			<Text
				className={cn(
					' text-center text-base rounded-lg self-center font-light ',
					'px-3 my-2 py-1 border-none',
					activeTab === 'activeBtn' ? activeBtn : null,
					activeTab === 'defaultBtn' ? defaultBtn : null,
					activeTab === 'deleteBtn' ? deleteBtn : null,
					activeTab === 'premiertBtn' ? premiertBtn : null
				)}
				style={{ borderWidth: 0 }}
			>
				{children}
			</Text>
		</Pressable>
	)
}

export default ButtonForm
