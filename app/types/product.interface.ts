import { Icategory } from './category.interface'

export interface IProduct {
	id: string
	name: string
	slug: string
	description: string
	volume: string
	unit: string
	minportion: number
	price: number
	sort?: number
	show?: number
	recommended?: number
	image: string
	createdAt: string
	category: Icategory
}
