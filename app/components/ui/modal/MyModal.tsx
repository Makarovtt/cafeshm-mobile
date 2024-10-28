import clsx from 'clsx'
import React, { FC, ReactElement } from 'react'
import { Text, View } from 'react-native'
import Modal, {
	BottomModal,
	ModalContent,
	SlideAnimation
} from 'react-native-modals'

import ButtonForm from '@/components/ui/button/ButtonForm'
import Field from '@/components/ui/field/Field'

interface IProps {
	isModal: boolean
	onClose: () => void
	children: ReactElement
	className?: string
}

export const MyModal: FC<IProps> = ({
	isModal,
	onClose,
	children,
	className
}) => {
	return (
		<BottomModal
			visible={isModal}
			onTouchOutside={() => onClose()}
			// modalAnimation={
			// 	new SlideAnimation({
			// 		slideFrom: 'top'
			// 	})
			// }
		>
			<ModalContent className={clsx('', className)} style={{}}>
				{children}
			</ModalContent>
		</BottomModal>
	)
}
