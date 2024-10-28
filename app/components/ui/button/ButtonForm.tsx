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
	const selectBtn = (btn: any) => {
		const select = new Map([
			['waitBtn', 'bg-[#ffffff] border border-gray-300 text-gray-700'],
			['defaultBtn', 'bg-[#c4c4c4] border border-gray-300 text-gray-700'],
			['deleteBtn', 'bg-[#d73e3e] border border-red-200 text-white'],
			[
				'activeBtn',
				'bg-[#55b3d8] border border-sky-500 text-white font-semibold'
			]
		])
		return select.get(btn)
	}
	return (
		<Pressable className={className} {...rest}>
			<Text
				className={cn(
					' text-center text-base rounded-lg self-center font-light ',
					'px-3 my-2 py-1',
					selectBtn(activeTab)
				)}
				style={{ borderWidth: 0 }}
			>
				{children}
			</Text>
		</Pressable>
	)
}

export default ButtonForm
