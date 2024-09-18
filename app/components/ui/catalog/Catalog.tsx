import HorizontalScrollMenu, {
	RouteProps
} from '@nyashanziramasanga/react-native-horizontal-scroll-menu/src'
import cn from 'clsx'
import { FC, useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

import { ISearchFormData } from '@/components/screens/search/search.interface'
import { useSearch } from '@/components/screens/search/useSearch'
import Field from '@/components/ui/field/Field'

import { IProduct } from '@/types/product.interface'

import Heading from '../Heading'
import Loader from '../Loader'

import CatalogSearch from './CatalogSearch'
import { IBlockProducts, ICatalog } from './catalog.interface'
import ProductItem from './product-item/ProductItem'

const Catalog: FC<ICatalog> = ({ title, sectionProducts }) => {
	const NavigationTabs = sectionProducts.map((item, index) => ({
		id: index,
		name: item.name
	}))
	const [selectedIndex, setSelectedIndex] = useState(0)
	const { searchTerm, isLoading, control, products } = useSearch()
	const [dataSourceCords, setDataSourceCords] = useState([] as number[])
	const [activeCategory, setActiveCategory] = useState<number>(0)
	const [scrollToIndex, setScrollToIndex] = useState(0)
	const [ref, setRef] = useState<ScrollView>()

	const scrollHandler = (key: number) => {
		setActiveCategory(key)
		if (dataSourceCords.length > scrollToIndex) {
			ref?.scrollTo({
				x: 0,
				y: dataSourceCords[key] - 200,
				animated: true
			})
		}
	}
	const onPress = (route: RouteProps) => {
		setSelectedIndex(route.id)
		// console.log('Tab pressed', route)
		if (dataSourceCords.length > scrollToIndex) {
			ref?.scrollTo({
				x: 0,
				y: dataSourceCords[route.id] + 30,
				animated: true
			})
		}
	}
	return (
		<ScrollView
			stickyHeaderIndices={[0]}
			ref={ref => {
				setRef(ref as any)
			}}
		>
			{!!searchTerm ? null : (
				// <ScrollView
				// 	horizontal={true}
				// 	showsHorizontalScrollIndicator={false}
				// 	className='overflow-visible bg-white py-2  border-b border-b-gray-300'
				// 	style={{
				// 		shadowColor: '#171717',
				// 		shadowOffset: { width: -2, height: 4 },
				// 		shadowOpacity: 0.2,
				// 		shadowRadius: 3
				// 	}}
				// 	contentContainerStyle={{
				// 		paddingHorizontal: 15
				// 	}}
				// >
				// 	{sectionProducts?.map((category, index) => {
				// 		return (
				// 			<View key={category.name}>
				// 				<Pressable
				// 					onPress={() => scrollHandler(index)}
				// 					className={cn(
				// 						'rounded-xl  px-5 py-3 mx-2',
				// 						activeCategory === index
				// 							? 'bg-gray-300'
				// 							: 'bg-gray-200'
				// 					)}
				// 				>
				// 					<Text className='font-normal text-base text-center'>
				// 						{category.name}
				// 					</Text>
				// 				</Pressable>
				// 			</View>
				// 		)
				// 	})}
				// </ScrollView>
				<View
					className='flex-1 justify-center items-center overflow-visible bg-white py-2  border-b border-b-gray-300'
					style={{
						shadowColor: '#171717',
						shadowOffset: { width: -2, height: 4 },
						shadowOpacity: 0.2,
						shadowRadius: 3
					}}
				>
					<HorizontalScrollMenu
						items={NavigationTabs}
						onPress={onPress}
						selected={selectedIndex}
						buttonStyle={styles.buttonStyle}
						itemWidth={80}
						scrollAreaStyle={{
							height: 50
						}}
					/>
				</View>
			)}

			{!!searchTerm ? (
				<View className='mt-2'>
					{isLoading ? (
						<Loader />
					) : (
						<CatalogSearch products={products || []} />
					)}
				</View>
			) : sectionProducts?.length ? (
				<View className='my-[10px] px-3 mb-10'>
					<View className='mt-0 mx-3'>
						<Field<ISearchFormData>
							placeholder='Поиск'
							control={control}
							name='searchTerm'
							keyboardType='web-search'
						/>
					</View>
					{sectionProducts.map((section: IBlockProducts, index) => {
						return (
							<View
								key={index}
								onLayout={event => {
									const layout = event.nativeEvent.layout
									dataSourceCords[index] = layout.y
								}}
							>
								<Heading>{section.name}</Heading>
								<View
									style={{ gap: 10 }}
									className='flex flex-row justify-left flex-wrap mt-2'
								>
									{section.blockProducts.map(
										(item: IProduct) => {
											return (
												<ProductItem
													key={item.id}
													product={item}
												/>
											)
										}
									)}
								</View>
							</View>
						)
					})}
				</View>
			) : (
				<Text className='mt-2'>Продуктов нет</Text>
			)}
		</ScrollView>
	)
}

export default Catalog
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonStyle: {
		margin: 0,
		borderWidth: 0
	},
	text: {
		fontSize: 30,
		margin: 15
	}
})
