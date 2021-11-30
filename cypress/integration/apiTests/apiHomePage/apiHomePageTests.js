import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

import { navigateToAPIApp } from '../../common/apiApp'

Then('Validate posts to be 100', () => {})

Given('validate response of a request with resource id', () => {
	let userId, id, title, body
	cy.fixture('posts1').then(data => {
		userId = data.userId
		id = data.id
		title = data.title
		body = data.body
	})

	cy.request({
		method: 'GET',
		url: 'https://jsonplaceholder.typicode.com/posts/1',
	}).then(res => {
		expect(res.status).to.eq(200)
		expect(res.body.userId).equal(userId)
		expect(res.body.id).equal(id)
		expect(res.body.title).equal(title)
		expect(res.body.body).equal(body)
	})
})

Given('validate response of a request for all resources', () => {
	cy.request({
		method: 'GET',
		url: 'https://jsonplaceholder.typicode.com/posts',
	}).then(res => {
		cy.log('userId', res.body)
		expect(res.status).to.eq(200)
		expect(res.body.length).eq(100)
	})
})

Given('validate Creation a resource', () => {
	cy.request({
		method: 'POST',
		url: 'https://jsonplaceholder.typicode.com/posts',
		body: JSON.stringify({
			title: 'foo',
			body: 'bar',
			userId: 1,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	}).then(res => {
		cy.log('body', res.body)
		expect(res.status).to.eq(201)
		expect(res.body.userId).equal(1)
		expect(res.body.title).equal('foo')
		expect(res.body.body).equal('bar')
	})
})

Given('validate Updating a resource', () => {
	cy.request({
		method: 'PUT',
		url: 'https://jsonplaceholder.typicode.com/posts/1',
		body: JSON.stringify({
			id: 1,
			title: 'foo',
			body: 'bar',
			userId: 1,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	}).then(res => {
		cy.log('body', res.body)
		expect(res.status).to.eq(200)
		expect(res.body.userId).equal(1)
		expect(res.body.id).equal(1)
		expect(res.body.title).equal('foo')
		expect(res.body.body).equal('bar')
	})
})

Given('validate Creation a resource', () => {
	cy.request({
		method: 'POST',
		url: 'https://jsonplaceholder.typicode.com/posts',
		body: JSON.stringify({
			title: 'foo',
			body: 'bar',
			userId: 1,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	}).then(res => {
		cy.log('body', res.body)
		expect(res.status).to.eq(201)
		expect(res.body.userId).equal(1)
		expect(res.body.title).equal('foo')
		expect(res.body.body).equal('bar')
	})
})

Given('validate Patching a resource', () => {
	cy.request({
		method: 'PATCH',
		url: 'https://jsonplaceholder.typicode.com/posts/1',
		body: JSON.stringify({
			title: 'foo',
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	}).then(res => {
		cy.log('body', res.body)
		expect(res.status).to.eq(200)
		expect(res.body.userId).equal(1)
		expect(res.body.title).equal('foo')
	})
})

Given('validate Deleting a resource', () => {
	cy.request({
		method: 'DELETE',
		url: 'https://jsonplaceholder.typicode.com/posts/1',
	}).then(res => {
		cy.log('body', res.body)
		expect(res.status).to.eq(200)
	})
})

Given('validate Filtering resources', () => {
	cy.request('https://jsonplaceholder.typicode.com/posts?userId=1').then(
		res => {
			cy.log('body', res.body)
			expect(res.status).to.eq(200)
			expect(res.body.length).eq(10)
		}
	)
})

Given('validate response mock with intercept', () => {
	navigateToAPIApp()

	cy.intercept(
		{
			path: '/users',
		},
		{
			body: [],
		}
	).as('emptyResponse')

	cy.contains('10 users').parents().contains('/users').click()

	cy.wait('@emptyResponse').then(res => {
		cy.log('userId', res.body)
		expect(res.status).to.eq(200)
		expect(res.body.length).eq(100)
	})
})
