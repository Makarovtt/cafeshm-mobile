import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Auth: undefined
	Home: undefined
	Favorites: undefined
	Search: undefined
	Actions: undefined
	ActionItem: undefined
	Explorer: undefined
	Profile: undefined
	Cart: undefined
	Thanks: undefined
	Order: undefined
	BonusDescription: undefined
	Category: {
		slug?: string
	}
	Product: {
		slug: string
	}
	AboutCompany: undefined
	Information: undefined
}

export interface Iroute {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
