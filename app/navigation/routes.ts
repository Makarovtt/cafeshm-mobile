import ActionItem from '@/components/screens/actions/ActionItem'
import Actions from '@/components/screens/actions/Actions'
import Auth from '@/components/screens/auth/Auth'
import Cart from '@/components/screens/cart/Cart'
import Category from '@/components/screens/category/Category'
import Explorer from '@/components/screens/explorer/Explorer'
import Favorites from '@/components/screens/favorites/Favorites'
import Home from '@/components/screens/home/Home'
import BonusDescription from '@/components/screens/home/bonus/BonusDescription'
import OrderPage from '@/components/screens/orders/OrderPage'
import Product from '@/components/screens/product/Product'
import Profile from '@/components/screens/profile/Profile'
import Search from '@/components/screens/search/Search'
import Thanks from '@/components/screens/thanks/Thanks'

import { Iroute } from './navigation.types'

export const routes: Iroute[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Favorites',
		component: Favorites
	},
	{
		name: 'Search',
		component: Search
	},
	{
		name: 'Actions',
		component: Actions
	},
	{
		name: 'ActionItem',
		component: ActionItem
	},
	{
		name: 'Explorer',
		component: Explorer
	},
	{
		name: 'Profile',
		component: Profile
	},
	{
		name: 'Cart',
		component: Cart
	},
	{
		name: 'Category',
		component: Category
	},
	{
		name: 'Product',
		component: Product
	},
	{
		name: 'Order',
		component: OrderPage
	},
	{
		name: 'Thanks',
		component: Thanks
	},
	{
		name: 'BonusDescription',
		component: BonusDescription
	}
]
