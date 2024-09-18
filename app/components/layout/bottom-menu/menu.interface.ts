import { TypeFeatherIconNames } from '@/types/icon.interface'

import { TypeRootStackParamList } from '@/navigation/navigation.types'

export interface IMenuItem {
	icon: TypeFeatherIconNames
	path: keyof TypeRootStackParamList
	text: string
}
export type TypeNavigate = (screenName: keyof TypeRootStackParamList) => void