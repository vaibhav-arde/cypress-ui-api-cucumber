import { Then, When } from 'cypress-cucumber-preprocessor/steps'

import { toDoMain, toDoFooter, removeItem } from './../../common/toDo'

Then('I see that I have no existing todos', () => {
	toDoMain().should('not.exist')
	toDoFooter().should('not.exist')
})

When('I remove {string}', title => {
	removeItem(title)
})
