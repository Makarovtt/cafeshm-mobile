import { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'
import Loader from '@/components/ui/Loader'
import Catalog from '@/components/ui/catalog/Catalog'
import CatalogSearch from '@/components/ui/catalog/CatalogSearch'
import Field from '@/components/ui/field/Field'

import { ISearchFormData } from './search.interface'
import { useSearch } from './useSearch'

const Search: FC = () => {
	const { searchTerm, isLoading, control, products } = useSearch()
	return (
		<Layout>
			<ScrollView className='px-3'>
				<Heading>Поиск</Heading>

				<View className='mt-3'>
					<Field<ISearchFormData>
						placeholder='Начните печатать'
						control={control}
						name='searchTerm'
						keyboardType='web-search'
					/>
				</View>

				{!!searchTerm ? (
					<View className='mt-2'>
						{isLoading ? (
							<Loader />
						) : (
							<CatalogSearch products={products || []} />
						)}
					</View>
				) : null}
			</ScrollView>
		</Layout>
	)
}

export default Search
