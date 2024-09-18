import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { UseFormReset } from 'react-hook-form'

import { useAuth } from '@/hooks/useAuth'

import { IAuthFormData } from '@/types/auth.interface'

import { AuthService } from '@/services/auth/auth.service'
import { UpdateUserDataService } from '@/services/updates/update-name.services'

export const useAuthMutations = (reset: UseFormReset<IAuthFormData>) => {
	const { setUser } = useAuth()

	const { mutate: loginSync, isPending: isLoginLoading } = useMutation({
		mutationKey: ['login'],
		mutationFn: ({ phone, password }: IAuthFormData) =>
			AuthService.main('login', phone, password),
		onSuccess(data) {
			reset()
			setUser(data.user)
		}
	})

	const { mutate: registerSync, isPending: isRegisterLoading } = useMutation({
		mutationKey: ['register'],
		mutationFn: ({ phone, password }: IAuthFormData) =>
			AuthService.main('reg', phone, password),
		onSuccess(data) {
			reset()
			setUser(data.user)
		}
	})

	// const { mutate: nameSync, isPending: isNameLoading } = useMutation({
	// 	mutationKey: ['name'],
	// 	mutationFn: ({ name, id }: { name: string; id: string }) =>
	// 		UpdateUserDataService.main(name, id),
	// 	onSuccess(data) {
	// 		reset()
	// 	}
	// })

	return useMemo(
		() => ({
			// nameSync,
			loginSync,
			registerSync,
			isLoading: isLoginLoading || isRegisterLoading
		}),
		[isLoginLoading, isRegisterLoading]
	)
}
