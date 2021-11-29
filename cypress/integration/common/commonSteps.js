import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I navigate to the home page', () => {
	cy.visit('/')
	cy.get('.todoapp').should('be.visible')
})

Then('I see that I have {string}', itemsLeft => {
	cy.get('.footer .todo-count').should('contain', itemsLeft)
})

Then('I see the following todos:', dataTable => {
	dataTable.rawTable.slice(1).forEach(todo => {
		const [title, completed] = todo
		const li = completed === 'true' ? 'li.completed' : 'li:not(.completed)'
		cy.get(`.todo-list ${li} .view label`).should('contain', title)
	})
})

Given('I have the following todos:', dataTable => {
	let todos = []
	dataTable.rawTable.slice(1).forEach((todo, index) => {
		const [title, completed] = todo
		todos.push({
			id: `test-todo-${index}`,
			title,
			completed: completed === 'true',
		})
	})
	cy.visit('/')
	window.localStorage.setItem('react-todos', JSON.stringify(todos))
})
