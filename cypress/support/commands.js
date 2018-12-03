// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("completeRegisterForm", (useEnterKey) => {
    let enterKey = useEnterKey ? '{enter}' : '';

    // Fill out fields
    cy.get('#inputName').type('Aleks')
    cy.get('#inputEmail').type('email@example.com')
    cy.get('#inputPassword').type(`secret${enterKey}`)

    // Click submit button
    if (!enterKey) { cy.get('[data-cy=btn-submit]').click() }

    // Assert
    cy.get('.alert-success').should('be.visible').and('contain', 'Success')
})
