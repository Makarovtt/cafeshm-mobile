import { ICartItem } from '@/types/cart.interface'

export interface ICartInitialState {
	items: ICartItem[]
}

export interface IAddToCartPayload extends Omit<ICartItem, 'id'> {}

export interface IChangeQuantityPayload
	extends Pick<ICartItem, 'id' | 'description'> {
	type: 'minus' | 'plus'
}
