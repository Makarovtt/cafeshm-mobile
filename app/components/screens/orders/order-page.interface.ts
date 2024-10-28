export interface IAddressDelivery {
	street: string
	home: string
	privateHome: boolean
	room?: string
	podyezd?: string
	level?: string
	comment?: string
}

export interface ITimeLater {
	day: string
	time: string
}

export type TReceivingMethod = 'self' | 'delivery'
export type TAddressCafe =
	| 'tatisheva'
	| 'perovskoy'
	| 'brestskaya'
	| 'nikolaevskoe'

export type TTimeReady = 'now' | 'later'
export type TPayMethod = 'cash' | 'card'
