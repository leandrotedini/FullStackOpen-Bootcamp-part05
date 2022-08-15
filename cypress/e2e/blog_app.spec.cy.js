describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function() {
    cy.get('[data-test-id="login-form"]')

    // cy.contains('login').click()
    // cy.get('input:first')
    // cy.get('input:last')
    // cy.get('#login-button').click()
  })
})