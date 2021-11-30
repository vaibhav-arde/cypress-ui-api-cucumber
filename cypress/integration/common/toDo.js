/// <reference types="cypress" />

const TODOURL = 'https://todomvc.com/examples/react/#/'
const NEWTODO = '.new-todo'
const TODOAPP = '.todoapp'
const ITEMSLEFT = '.footer .todo-count'
const CLEARCOMPLETED = '.clear-completed'
const TODOITEM = '.todo-list li .view label'
const EDITTODO = 'li.editing input.edit'
const FILTERS = '.todoapp .footer .filters li a'
const HEADER = '.header'
const INFO = '.info'
const TODOMAIN = '.todoapp section.main'
const TODOFOOTER = '.todoapp footer.footer'
const TOGGLEALL = '.toggle-all'

export function toggleAll() {
	return cy.get(TOGGLEALL)
}
export function toDoMain() {
	return cy.get(TODOMAIN)
}
export function toDoFooter() {
	return cy.get(TODOFOOTER)
}
export function openToDOApp() {
	cy.visit(TODOURL)
}

export function clearLocalStorage() {
	window.localStorage.setItem('react-todos', '[]')
}

export function createNewToDo(title) {
	cy.get(NEWTODO).type(`${title}{ENTER}`)
}

export function toDoApp() {
	return cy.get(TODOAPP)
}
export function itemsLeft() {
	return cy.get(ITEMSLEFT)
}
export function toDoItem() {
	return cy.get(TODOITEM)
}
export function getHeader() {
	return cy.get(HEADER)
}
export function getInfo() {
	return cy.get(INFO)
}
export function editingToDo(title) {
	return cy.get(EDITTODO).type(`{selectall}{backspace}${title}{ENTER}`)
}

export function validateEachToDo(dataTable) {
	dataTable.rawTable.slice(1).forEach(todo => {
		const [title, completed] = todo
		const li = completed === 'true' ? 'li.completed' : 'li:not(.completed)'
		cy.get(`.todo-list ${li} .view label`).should('contain', title)
	})
}

export function insertToDos(dataTable) {
	let todos = []
	dataTable.rawTable.slice(1).forEach((todo, index) => {
		const [title, completed] = todo
		todos.push({
			id: `test-todo-${index}`,
			title,
			completed: completed === 'true',
		})
	})
	openToDOApp()
	window.localStorage.setItem('react-todos', JSON.stringify(todos))
}

export function clearCompletedToDo() {
	cy.get(CLEARCOMPLETED).click()
}

export function useFilter(filterType) {
	const text = filterType.charAt(0).toUpperCase() + filterType.slice(1)
	cy.get(FILTERS).contains(text).click()
}

export function removeItem(title) {
	cy.get(TODOITEM)
		.contains(title)
		.parent()
		.find('.destroy')
		.click({ force: true })
}

export function toggleItem(title) {
	cy.get(TODOITEM)
		.contains(title)
		.parent()
		.find('.toggle')
		.click({ force: true })
}
