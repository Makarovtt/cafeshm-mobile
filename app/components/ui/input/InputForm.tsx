import cn from 'clsx'
import { FC, PropsWithChildren, useState } from 'react'
import { TextInput } from 'react-native-paper'

import { IinputForm } from './inputForm.interface'

const InputForm: FC<PropsWithChildren<IinputForm>> = ({
	className = '',
	...rest
}) => {
	const [isActive, setIsActive] = useState(false)
	return (
		<TextInput
			className={cn(
				'bg-white mt-3 border py-0 transition rounded-xl',
				isActive ? 'border-sky-500' : 'border-gray-200',
				className
			)}
			underlineColor='rgba(255,255,255, 0)'
			activeUnderlineColor='rgba(255,255,255, 0)'
			onFocus={() => setIsActive(true)}
			onBlur={() => setIsActive(false)}
			placeholderTextColor='#b0b0b0'
			{...rest}
		/>
	)
}

export default InputForm
