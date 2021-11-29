defineParameterType({
	name: 'toggle-action',
	regexp: /complete|un-complete/,
})

When('I {toggle-action} {string}', (_toggleAction, title) => {
	cy.get('.todo-list li .view label')
		.contains(title)
		.parent()
		.find('.toggle')
		.click()
})

When('I toggle all todos', () => {
	cy.get('.toggle-all').click({ force: true })
})
