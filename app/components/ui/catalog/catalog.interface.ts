import { IProduct } from '@/types/product.interface'

export interface ICatalog {
	title?: string
	sectionProducts: IBlockProducts[]
}

export interface ICatalogSearch {
	title?: string
	products: IProduct[]
}

export interface IBlockProducts {
	name: string
	blockProducts: IProduct[]
}
