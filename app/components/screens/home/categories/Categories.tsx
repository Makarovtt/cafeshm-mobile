import { FC } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'

import Heading from '@/components/ui/Heading'
import Loader from '@/components/ui/Loader'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { IProduct } from '@/types/product.interface'

import { getMediaSource } from '@/utils/getMediaSource'

import { useGetAllProducts } from '../../explorer/useGetAllProducts'

import { useGetAllCategories } from './useGetAllCategories'

const Categories: FC = () => {
	const { products, isLoading, arrBlockProducts } = useGetAllProducts()

	const { navigate } = useTypedNavigation()

	return isLoading ? (
		<Loader />
	) : (
		<View className='flex flex-col mt-1'>
			<Heading>Категории</Heading>
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				className='overflow-visible pt-0 mt-0'
				style={{
					shadowColor: '#171717',
					shadowOffset: { width: -2, height: 4 },
					shadowOpacity: 0.2,
					shadowRadius: 3
				}}
				contentContainerStyle={{
					paddingHorizontal: 15
				}}
			>
				{arrBlockProducts?.map(category => (
					<View key={category.name}>
						<Pressable
							onPress={() => {
								navigate('Explorer')
								// navigate('Category', { slug: category.slug })
							}}
							className='rounded-xl bg-gray-200 px-5 py-3 mx-2'
						>
							<Text className='font-normal text-base text-center'>
								{category.name}
							</Text>
						</Pressable>
					</View>
				))}
			</ScrollView>
		</View>
	)
}

export default Categories
