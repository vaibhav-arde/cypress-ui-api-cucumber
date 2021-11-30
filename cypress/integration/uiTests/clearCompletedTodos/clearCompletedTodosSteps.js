import { When } from 'cypress-cucumber-preprocessor/steps'

import { clearCompletedToDo } from './../../common/toDo'

When('I clear all completed todos', () => {
	clearCompletedToDo()
})
