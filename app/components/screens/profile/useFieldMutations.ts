import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import { UseFormReset } from 'react-hook-form'

import { IUserDataInput } from '@/types/auth.interface'

import { UpdateUserDataService } from '@/services/updates/update-name.services'

export const useFieldMutations = (reset: UseFormReset<IUserDataInput>) => {
	const queryClient = useQueryClient()

	const { mutate: nameSync, isPending: isUpdateNameUserLoading } =
		useMutation({
			mutationKey: ['name'],
			mutationFn: ({ name, id }: { name: string; id: string }) =>
				UpdateUserDataService.updateName(name, id),
			onSuccess(data) {
				reset()
			}
		})

	const { mutate: phoneSync, isPending: isUpdatePhoneUserLoading } =
		useMutation({
			mutationKey: ['phone'],
			mutationFn: ({ phone, id }: { phone: string; id: string }) =>
				UpdateUserDataService.updatePhone(phone, id),
			onSuccess(data) {
				reset()
			}
		})

	const { mutate: emailSync, isPending: isUpdateEmailUserLoading } =
		useMutation({
			mutationKey: ['email'],
			mutationFn: ({ email, id }: { email: string; id: string }) =>
				UpdateUserDataService.updateEmail(email, id),
			onSuccess(data) {
				reset()
			}
		})

	queryClient.invalidateQueries({ queryKey: ['get profile'] })

	return useMemo(
		() => ({
			nameSync,
			isUpdateNameUserLoading: isUpdateNameUserLoading,
			isUpdatePhoneUserLoading: isUpdatePhoneUserLoading,
			isUpdateEmailUserLoading: isUpdateEmailUserLoading,
			phoneSync,
			emailSync
		}),
		[
			isUpdateNameUserLoading,
			isUpdatePhoneUserLoading,
			isUpdateEmailUserLoading
		]
	)
}
