import { FC, useState } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'

import ButtonForm from '@/components/ui/button/ButtonForm'
import { MyModal } from '@/components/ui/modal/MyModal'

import { useAuthMutations } from '../../auth/useAuthMutations'

import { useDeleteUserMutations } from './useDeleteUserMutations'

interface Iprops {
	profileId: string
}

export const DeleteUser: FC<Iprops> = ({ profileId }) => {
	const [isVisible, setIsVisible] = useState<boolean>(false)
	const { isLoading, deleteUserSync } = useDeleteUserMutations()
	const delUser = () => {
		if (profileId) deleteUserSync(profileId)
	}
	// async getProfile() {
	// 	return request<IUser>({
	// 		url: getUsersUrl('/profile'),
	// 		method: 'GET'
	// 	})
	// }

	return (
		<View className='my-6 flex items-start justify-center'>
			<View className='flex flex-row justify-between items-center w-full'>
				<Text className='text-base text-gray-600'>Удалить аккаунт</Text>
				<ButtonForm
					className='text-left'
					onPress={() => setIsVisible(true)}
				>
					<Text>Удалить</Text>
				</ButtonForm>
			</View>

			<MyModal isModal={isVisible} onClose={() => setIsVisible(false)}>
				<View>
					<Text className='text-xl text-red-400 font-light mb-5 text-center'>
						Хотите удалить аккаунт?
					</Text>
					<Text className='text-[12px] text-gray-600 text-center'>
						Удаление аккаунта необратимо. Данные удалятся без
						возможности восстановления
					</Text>
					<View className='flex-row justify-center gap-5 mt-5'>
						<Button
							mode='contained-tonal'
							onPress={() => setIsVisible(false)}
						>
							Отмена
						</Button>
						<Button mode='contained' onPress={delUser}>
							Удалить
						</Button>
					</View>
				</View>
			</MyModal>
		</View>
	)
}
