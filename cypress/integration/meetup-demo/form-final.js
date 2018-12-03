/// <reference types="Cypress" />

context('Register Page', () => {

    // https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Hooks
    beforeEach(() => {
        cy.visit('/register')
    })

    describe('Check page copy', () => {

        it('should display the correct main heading', () => {
            cy.get('[data-cy=main-heading]').contains('Register heading')
        })

    })

    describe('Check register form', () => {

        // https://on.cypress.io/assertions
        it('should display validation errors if form fields are empty', () => {
            cy.get('[data-cy=btn-submit]').click()
            cy.get('.text-danger').should('have.length', 3)
        })

        it('should display the success message after a valid form submit', () => {
            // cy.completeRegisterForm(true, [inputs]);
            cy.get('#inputName').type('Aleks')
            cy.get('#inputEmail').type('email@example.com')
            cy.get('#inputPassword').type('secret')
            cy.get('[data-cy=btn-submit]').click()

            cy.get('.alert-success')
                .should('be.visible')
                .and('contain', 'Success')
        })

    })

 })
