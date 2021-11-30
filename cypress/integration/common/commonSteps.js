import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import { openToDOApp } from './toDo'

import { toDoApp, validateEachToDo, itemsLeft, insertToDos } from './toDo'

Given('I navigate to the home page', () => {
	openToDOApp()
	toDoApp().should('be.visible')
})

Then('I see that I have {string}', itemLeft => {
	itemsLeft().should('contain', itemLeft)
})

Then('I see the following todos:', dataTable => {
	validateEachToDo(dataTable)
})

Given('I have the following todos:', dataTable => {
	insertToDos(dataTable)
})
