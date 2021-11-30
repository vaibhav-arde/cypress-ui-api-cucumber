/// <reference types="cypress" />

const APIAPPURL = 'https://jsonplaceholder.typicode.com/'

export function navigateToAPIApp() {
	cy.visit(APIAPPURL)
}
