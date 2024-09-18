import React, { Component } from 'react'

type NewType = keyof State

const NewConst = {} as NewType

interface Person {
	name: string
	age: number
	isStudent: boolean
}

type PersonKeys = keyof Person // "name" | "age" | "isStudent"

const Person: PersonKeys = 'name'

type Settings = { theme: string; notificationsEnabled: boolean; userId: number }
type User = { id: number; name: string; email: string }
type Profile = { bio: string; age: number; userId: number }

type UserProfileSettings = User &
	Omit<Profile, 'userId'> &
	Omit<Settings, 'userId'>

const PROFUSER = {} as UserProfileSettings

type Props = {}

type State = {
	value: number
	name: 'Timur'
}

class Temp extends React.Component<Props, Pick<State, 'value'>> {
	constructor(props: Props) {
		super(props)
		this.state = { value: 0 }
	}

	handleAgeChange = () => {
		this.setState({
			value: this.state.value + 1
		})
	}

	render() {
		return (
			<div>
				<p>Value is {this.state.value}</p>
				<button onClick={this.handleAgeChange}>Increment value</button>
			</div>
		)
	}
}
