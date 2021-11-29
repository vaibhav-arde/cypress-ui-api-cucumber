import { When } from 'cypress-cucumber-preprocessor/steps'

When('I choose to edit {string}', title => {
	cy.get('.todo-list li .view label').contains(title).dblclick()
})

When('I submit {string} for my edit todo title', title => {
	cy.get('li.editing input.edit').type(
		`{selectall}{backspace}${title}{ENTER}`
	)
})
