import { Then, When } from 'cypress-cucumber-preprocessor/steps'

Then('I see that I have no existing todos', () => {
	cy.get('.todoapp section.main').should('not.exist')
	cy.get('.todoapp footer.footer').should('not.exist')
})

When('I remove {string}', title => {
	cy.get('.todo-list li .view label')
		.contains(title)
		.parent()
		.find('.destroy')
		.click({ force: true })
})
