import { FC, PropsWithChildren, useRef, useState } from 'react'
import { Control } from 'react-hook-form'

import Field from '@/components/ui/field/Field'

import { IAuthFormData } from '@/types/auth.interface'

import { validEmail } from './email.regex'
import { validPhone } from './phone.regex'

interface IAuthFields {
	control: Control<IAuthFormData>
}
const AuthFields: FC<IAuthFields> = ({ control }) => {
	return (
		<>
			<Field<IAuthFormData>
				placeholder='Телефон'
				control={control}
				isPhoneType={true}
				name='phone'
				rules={{
					required: 'Поле обязательное',
					pattern: {
						value: validPhone,
						message: 'Введите валидный телефон'
					},
					minLength: {
						value: 15,
						message: 'Введите валидный телефон'
					}
				}}
				keyboardType='numeric'
			/>

			<Field<IAuthFormData>
				placeholder='пароль'
				control={control}
				name='password'
				secureTextEntry
				rules={{
					required: 'Поле обязательное',
					minLength: {
						value: 6,
						message: 'Введите пароль не менее 6 символов'
					}
				}}
			/>
		</>
	)
}

export default AuthFields
