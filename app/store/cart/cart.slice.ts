import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import {
	IAddToCartPayload,
	ICartInitialState,
	IChangeQuantityPayload
} from './cart.types'

const initialState: ICartInitialState = {
	items: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
			const isExist = state.items.some(
				item => item.product.id === action.payload.product.id
			)

			if (!isExist)
				state.items.push({
					...action.payload,
					// id: state.items.length.toString(),
					id: action.payload.product.id,
					quantity: action.payload.product.minportion,
					description: action.payload.product.description
				})
		},
		removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
			state.items = state.items.filter(
				item => item.id !== action.payload.id
			)
		},
		changeQuantity: (
			state,
			action: PayloadAction<IChangeQuantityPayload>
		) => {
			const { id, type } = action.payload
			const item = state.items.find(item => item.id === id)
			if (item && item.quantity) {
				type === 'plus' ? item.quantity++ : item.quantity--
			}
		},
		reset: state => {
			state.items = []
		}
	}
})
