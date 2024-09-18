import { Feather } from '@expo/vector-icons'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'

import { IUserDataInput } from '@/types/auth.interface'

import ProfileModal from '../../ProfileModal'
import { useFieldMutations } from '../../useFieldMutations'
import { IUserProps } from '../userdata.interface'

const UserName: FC<IUserProps> = ({ profile, isRefreshLoding }) => {
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
	if (profile?.name) {
		setValue('name', profile.name)
	}

	const { nameSync } = useFieldMutations(reset)

	const onSubmit: SubmitHandler<IUserDataInput> = data => {
		nameSync(data)
		onModalClose()
	}
	return (
		<>
			<View className='flex-row justify-between items-center w-full mt-5'>
				<Text className='text-base font-bold'>
					{isRefreshLoding ? (
						'Загрузка'
					) : profile?.name ? (
						profile.name
					) : (
						<Text className='text-red-400 font-light'>
							Неизвестно
						</Text>
					)}
				</Text>
				<Pressable
					onPress={() => onModalOpen('имя')}
					className='flex-row gap-x-2 justify-end items-center'
				>
					<Text className='text-sm'>Изменить</Text>
					<Feather name='edit-3' size={18} color='gray' />
				</Pressable>
			</View>

			<ProfileModal
				autoCapitalize='words'
				profile={profile}
				isModalVisible={isModalVisible}
				onModalClose={onModalClose}
				objChange={objChange}
				setValue={setValue}
				register={register}
				control={control}
				handleSubmit={handleSubmit}
				onSubmit={onSubmit}
			/>
		</>
	)
}

export default UserName
