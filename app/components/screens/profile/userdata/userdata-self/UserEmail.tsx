import { Feather } from '@expo/vector-icons'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'

import { validEmail } from '@/components/screens/auth/email.regex'
import { MyModal } from '@/components/ui/modal/MyModal'

import { IUserDataInput } from '@/types/auth.interface'

import ProfileModal from '../../ProfileModal'
import { useFieldMutations } from '../../useFieldMutations'
import { IUserProps } from '../userdata.interface'

const UserEmail: FC<IUserProps> = ({ profile, isRefreshLoding }) => {
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
	if (profile?.email) {
		setValue('email', profile.email)
	}

	const { emailSync } = useFieldMutations(reset)

	const onSubmit: SubmitHandler<IUserDataInput> = data => {
		emailSync(data)
		onModalClose()
	}
	return (
		<>
			<View className='flex-row justify-between items-center w-full mt-5'>
				<Text className='text-base font-bold'>
					{isRefreshLoding ? (
						'Загрузка'
					) : profile?.email ? (
						profile.email
					) : (
						<Text className='text-red-400 font-light'>
							Укажите Ваш email
						</Text>
					)}
				</Text>

				<Pressable
					onPress={() => onModalOpen('email')}
					className='flex-row gap-x-2 justify-end items-center'
				>
					<Text className='text-sm'>Изменить</Text>

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
							value: validEmail,
							message: 'Введите валидный Email'
						}
					}}
					control={control}
					handleSubmit={handleSubmit}
					onSubmit={onSubmit}
				/>
			</MyModal>
		</>
	)
}

export default UserEmail
