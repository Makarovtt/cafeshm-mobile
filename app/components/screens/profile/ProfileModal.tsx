import { FC } from 'react'
import { Text, View } from 'react-native'
import Modal, { ModalContent, SlideAnimation } from 'react-native-modals'

import Button from '@/components/ui/button/Button'
import ButtonForm from '@/components/ui/button/ButtonForm'
import Field from '@/components/ui/field/Field'

import { IUserDataInput } from '@/types/auth.interface'
import { IUser } from '@/types/user.interface'

import { validEmail } from '../auth/email.regex'

interface Iprops {
	profile: any
	isModalVisible: boolean
	onModalClose: () => void
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
	isModalVisible,
	onModalClose,
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
		<Modal
			visible={isModalVisible}
			onTouchOutside={onModalClose}
			modalAnimation={
				new SlideAnimation({
					slideFrom: 'top'
				})
			}
		>
			<ModalContent
				style={{
					width: '90%',
					maxWidth: 500,
					paddingLeft: 50
				}}
			>
				<Text>Изменить {objChange}</Text>
				<Field<IUserDataInput>
					autoCapitalize={autoCapitalize}
					register={register}
					setValue={setValue}
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
				<View className='flex-row items-center justify-between gap-x-3'>
					<ButtonForm activeTab='defaultBtn' onPress={onModalClose}>
						Отмена
					</ButtonForm>
					<ButtonForm
						activeTab='premiertBtn'
						onPress={handleSubmit(onSubmit)}
					>
						Обновить
					</ButtonForm>
				</View>
			</ModalContent>
		</Modal>
	)
}

export default ProfileModal
