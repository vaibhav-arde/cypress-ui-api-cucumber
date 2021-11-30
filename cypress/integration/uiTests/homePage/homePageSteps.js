import { Then } from 'cypress-cucumber-preprocessor/steps'

import { getHeader, getInfo } from './../../common/toDo'
Then('I see the home page', () => {
	getHeader().should('be.visible')
	getInfo().should('be.visible')
})
