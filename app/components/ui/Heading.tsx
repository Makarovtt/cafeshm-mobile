import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { Text } from 'react-native'

interface IHeading {
	isCenter?: boolean
	className?: string
}

const Heading: FC<PropsWithChildren<IHeading>> = ({
	children,
	isCenter = false,
	className
}) => {
	return (
		<Text
			className={cn(
				'font-bold text-2xl my-5 text-[#CB4444]',
				isCenter && 'text-center',
				className
			)}
		>
			{children}
		</Text>
	)
}

export default Heading
