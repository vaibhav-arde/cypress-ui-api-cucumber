import { When } from 'cypress-cucumber-preprocessor/steps'

When('I clear all completed todos', () => {
	cy.get('.clear-completed').click()
})
