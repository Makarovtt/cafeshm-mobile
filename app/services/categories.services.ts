import { Icategory } from '@/types/category.interface'

import { getCategoriesUrl } from '@/config/api.config'

import { request } from './api/request.api'

export const CategoryServices = {
	async getAll() {
		return request<Icategory[]>({
			url: getCategoriesUrl(''),
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return request<Icategory>({
			url: getCategoriesUrl(`/by-slug/${slug}`),
			method: 'GET'
		})
	}
}
