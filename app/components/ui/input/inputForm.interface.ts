import { TextInputProps } from 'react-native-paper'

export interface IinputForm extends TextInputProps {
	activeTab?: false | true
	className?: string
}
