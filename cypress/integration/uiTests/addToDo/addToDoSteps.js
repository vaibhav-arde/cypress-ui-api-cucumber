import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

import {
	openToDOApp,
	clearLocalStorage,
	createNewToDo,
} from './../../common/toDo'

Given('I have no todos', () => {
	openToDOApp()
	clearLocalStorage()
})

When('I submit {string} for my new todo title', title => {
	createNewToDo(title)
})
