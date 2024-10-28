import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { UseFormReset } from 'react-hook-form'

import { useAuth } from '@/hooks/useAuth'

import { IAuthFormData } from '@/types/auth.interface'

import { AuthService } from '@/services/auth/auth.service'
import { UpdateUserDataService } from '@/services/updates/update-name.services'

interface Idelete {
	profileId: string
}

export const useDeleteUserMutations = () => {
	const { setUser } = useAuth()

	const { mutate: deleteUserSync, isPending: isDeleteLoading } = useMutation({
		mutationKey: ['delete'],
		mutationFn: (profileId: string) => AuthService.delete(profileId),
		onSuccess(data) {
			setUser(null)
		}
	})

	return useMemo(
		() => ({
			deleteUserSync,
			isLoading: isDeleteLoading
		}),
		[isDeleteLoading]
	)
}
