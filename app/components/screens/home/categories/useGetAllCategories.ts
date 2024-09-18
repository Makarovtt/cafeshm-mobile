import { useQuery } from '@tanstack/react-query'

import { CategoryServices } from '@/services/categories.services'

export const useGetAllCategories = () => {
	const { data: categories, isLoading } = useQuery({
		queryKey: ['get categories'],
		queryFn: () => CategoryServices.getAll(),
		select: data => data
	})

	return { categories, isLoading }
}
