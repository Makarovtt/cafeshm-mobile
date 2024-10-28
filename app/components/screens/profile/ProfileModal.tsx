import { FC } from 'react'
import { Text, View } from 'react-native'
import Modal, { ModalContent, SlideAnimation } from 'react-native-modals'
import { Button } from 'react-native-paper'

import ButtonForm from '@/components/ui/button/ButtonForm'
import Field from '@/components/ui/field/Field'

import { IUserDataInput } from '@/types/auth.interface'

interface Iprops {
	profile: any
	onClose: () => void
	objChange: string
	setValue: any
	register: any
	control: any
	handleSubmit: any
	onSubmit: any
	rules?: any
	keyboardType?: any
	autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined
}
const ProfileModal: FC<Iprops> = ({
	profile,
	onClose,
	objChange,
	setValue,
	register,
	control,
	handleSubmit,
	onSubmit,
	rules,
	autoCapitalize = 'none'
}) => {
	return (
		<View>
			<Text className='text-xl text-red-400 font-light mb-5 text-center'>
				Изменить {objChange}
			</Text>
			<Field<IUserDataInput>
				autoCapitalize={autoCapitalize}
				register={register}
				setValue={setValue}
				isPhoneType={objChange === 'телефон' && true}
				placeholder={`Введите ${objChange}`}
				control={control}
				name={
					objChange === 'имя'
						? 'name'
						: objChange === 'телефон'
							? 'phone'
							: 'email'
				}
				defaultValue={
					objChange === 'имя'
						? profile?.name
						: objChange === 'телефон'
							? profile?.phone
							: profile?.email
				}
				rules={rules}
				className='min-w-[200px]'
			/>
			<Field<IUserDataInput>
				control={control}
				name='id'
				inputHidden={true}
				defaultValue={profile?.id}
				rules={{
					required: 'Поле обязательное'
				}}
				className='!h-0 !w-0 opacity-0 overflow-hidden'
			/>
			<View className='flex-row justify-center gap-5 mt-5'>
				<Button mode='contained-tonal' onPress={() => onClose()}>
					Отмена
				</Button>
				<Button mode='contained' onPress={handleSubmit(onSubmit)}>
					Обновить
				</Button>
			</View>
		</View>
	)
}

export default ProfileModal
