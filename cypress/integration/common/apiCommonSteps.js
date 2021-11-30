import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

import { navigateToAPIApp } from './apiApp'

Given('I navigate to the API home page', () => {
	navigateToAPIApp()
})

Then('I see the API home page', () => {
	cy.url().should('include', 'https://jsonplaceholder.typicode.com/')
})
