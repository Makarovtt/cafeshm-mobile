import cn from 'clsx'
import { FC, useState } from 'react'
import { Controller } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import { IField } from './field.interface'

const Field = <T extends Record<string, any>>({
	register,
	setValue,
	control,
	inputHidden = false,
	isPhoneType = false,
	rules,
	defaultValue,
	name,
	className,
	...rest
}: IField<T>): JSX.Element => {
	const [phoneNumber, setPhoneNumber] = useState('')
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { value = defaultValue, onChange, onBlur },
				fieldState: { error }
			}) => (
				<>
					<View
						className={cn(
							'bg-white w-full border rounded-lg pb-4 pt-2.5 px-4 my-1.5',
							error ? 'border-red-500' : 'border-gray-400',
							className
						)}
						style={
							inputHidden
								? { opacity: 0, height: 0, width: 0 }
								: null
						}
					>
						{isPhoneType ? (
							<TextInputMask
								type={'cel-phone'}
								options={{
									maskType: 'BRL', //for international set it -&amp;nbsp;INTERNATIONAL type masking
									withDDD: true,
									dddMask: '(999) 999 99-99' //this is a your define formatting you use according to your requirment
								}}
								maxLength={15} //set length according to your input requirment
								className='text-black text-base'
								placeholderTextColor='#6A6A6A'
								onChangeText={onChange}
								onBlur={onBlur}
								defaultValue={defaultValue}
								value={(value || '').toString()}
								autoCapitalize={'none'}
								autoCorrect={false}
								returnKeyType={'next'}
								keyboardType={'number-pad'}
								{...rest}
							/>
						) : (
							<TextInput
								{...rest}
								onChangeText={onChange}
								onBlur={onBlur}
								defaultValue={defaultValue}
								value={(value || '').toString()}
								className='text-black text-base'
								placeholderTextColor='#6A6A6A'
							/>
						)}
					</View>
					{error && (
						<Text className='text-red-500'>{error.message}</Text>
					)}
				</>
			)}
		/>
	)
}

export default Field
