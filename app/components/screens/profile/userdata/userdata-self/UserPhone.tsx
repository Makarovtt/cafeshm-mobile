import { Feather } from '@expo/vector-icons'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'

import { validPhone } from '@/components/screens/auth/phone.regex'
import { MyModal } from '@/components/ui/modal/MyModal'

import { IUserDataInput } from '@/types/auth.interface'

import ProfileModal from '../../ProfileModal'
import { useFieldMutations } from '../../useFieldMutations'
import { IUserProps } from '../userdata.interface'

const UserPhone: FC<IUserProps> = ({ profile, isRefreshLoding }) => {
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [objChange, setObjChange] = useState<string>('')
	const onModalClose = () => {
		setIsModalVisible(false)
	}

	const onModalOpen = (obj: string) => {
		setIsModalVisible(true)
		setObjChange(obj)
	}
	const { register, setValue, handleSubmit, reset, control } =
		useForm<IUserDataInput>({
			mode: 'onChange'
		})

	if (profile?.id) {
		setValue('id', profile.id, { shouldValidate: false })
	}
	if (profile?.phone) {
		setValue('phone', profile.phone)
	}

	const { phoneSync } = useFieldMutations(reset)

	const onSubmit: SubmitHandler<IUserDataInput> = data => {
		phoneSync(data)
		onModalClose()
	}
	return (
		<>
			<View className='flex-row justify-between items-center w-full mt-5'>
				<Text className='text-base font- '>
					{isRefreshLoding
						? 'Загрузка'
						: profile?.phone
							? `+7 ${profile.phone}`
							: 'Неизвестно'}
				</Text>
				<Pressable
					onPress={() => onModalOpen('телефон')}
					className='flex-row gap-x-2 justify-end items-center'
				>
					<Text className='text-sm text-gray-600'>Изменить</Text>
					<Feather name='edit-3' size={18} color='gray' />
				</Pressable>
			</View>
			<MyModal isModal={isModalVisible} onClose={onModalClose}>
				<ProfileModal
					profile={profile}
					onClose={onModalClose}
					objChange={objChange}
					setValue={setValue}
					register={register}
					rules={{
						required: 'Поле обязательное',
						pattern: {
							value: validPhone,
							message: 'Введите валидный Телефон'
						},
						minLength: {
							value: 15,
							message: 'Введите валидный телефон'
						}
					}}
					keyboardType='numeric'
					control={control}
					handleSubmit={handleSubmit}
					onSubmit={onSubmit}
				/>
			</MyModal>
		</>
	)
}

export default UserPhone
