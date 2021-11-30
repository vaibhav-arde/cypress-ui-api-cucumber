import { When } from 'cypress-cucumber-preprocessor/steps'

import { toDoItem, editingToDo } from './../../common/toDo'

When('I choose to edit {string}', title => {
	toDoItem().contains(title).dblclick()
})

When('I submit {string} for my edit todo title', title => {
	editingToDo(title)
})
