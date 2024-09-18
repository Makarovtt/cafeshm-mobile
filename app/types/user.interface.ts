import { IProduct } from './product.interface'

export interface IUser {
	id: string
	email: string
	phone: string
	password: string
	name: string
	avatarPath: string
	favorites: IProduct[]
}
