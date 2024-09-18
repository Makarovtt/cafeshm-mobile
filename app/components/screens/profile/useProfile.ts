import { useQuery } from '@tanstack/react-query'

import { UserService } from '@/services/user.service'

export const useProfile = () => {
	const { data: profile, isLoading: isRefreshLoding } = useQuery({
		queryKey: ['get profile'],
		queryFn: () => UserService.getProfile()
	})

	return { profile, isRefreshLoding }
}
