given('I open the register page', () => {
    cy.visit('/register')
})

then(`I see {string} in the heading`, (title) => {
    cy.get('[data-cy=main-heading]').contains('Register heading')
})

when("I click the submit button", () => {
    cy.get('[data-cy=btn-submit]').click()
});

then(`I can see all the form validation messages`, (title) => {
    cy.get('.text-danger').should('have.length', 3)
})

when("I enter {string} in the name field", (text) => {
    cy.get('#inputName').type(text)
});

when("I enter {string} in the email field", (text) => {
    cy.get('#inputEmail').type(text)
});

when("I enter {string} in the password field", (text) => {
    cy.get('#inputPassword').type(text)
});

then(`I can see the successful form submission alert`, (title) => {
    cy.get('.alert-success')
        .should('be.visible')
        .and('contain', 'Success')
})
