import { toggleAll, toggleItem } from './../../common/toDo'

defineParameterType({
	name: 'toggle-action',
	regexp: /complete|un-complete/,
})

When('I {toggle-action} {string}', (_toggleAction, title) => {
	toggleItem(title)
})

When('I toggle all todos', () => {
	toggleAll().click({ force: true })
})
