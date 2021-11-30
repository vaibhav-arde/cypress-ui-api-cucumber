# cypress-ui-api-cucumber
UI and API test automation using Cypress and BDD Cucumber

This is the solution for below challenge:
1. Cover ToDo app with tests using Ruby/JS/Golang (http://todomvc.com/examples/react/#/)
In this task, we expect to have all paths you consider worthy covered by UI tests. Please focus on the ToDo app itself ignoring the left-hand panel.

2. Create few tests for REST API hosted on https://jsonplaceholder.typicode.com/
Expand existing UI tests with a set of API tests covering the critical functionality of the app mentioned above.

Required: All tests should be written using the BDD approach (preferable Cucumber)
Nice to have: Any specific test can be run at any time and will do its job regardless of the current system state (assuming the system is fully functioning). For example, a test for editing ToDo can be run when there are zero or multiple todos created
Both solutions should be in the same codebase hosted on Github or similar.
We expect as a result to have a fully functioning test suite. It has to be wrapped in easy to use solution for anyone to run it (e.g. dockerize tests)

Node Version: 14.17.3

How to use:

Use Node Version: 14.17.3
npm install

To open Cypress use command : npm run cy:open   
To run All tests in local use command: npm run cy:test   
To build docker image use command: docker build -t imageName .  
