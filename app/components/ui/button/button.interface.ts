import { PressableProps } from 'react-native'

export interface IButton extends PressableProps {
	activeTab?: 'activeBtn' | 'defaultBtn' | 'deleteBtn' | 'premiertBtn'
	className?: string
}

export type TypeButtonItem = {
	type: 'minus' | 'plus'
}
