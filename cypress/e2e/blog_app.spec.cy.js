
const validUser = {
  username: Cypress.env('validUsername'),
  password: Cypress.env('validPassword')
}

describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function() {
    cy.get('[data-test-id="login-form"]')
  })
})

describe('when logged in', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    cy.createUser({ ...validUser, name: 'TestName' })
    cy.visit('http://localhost:3000')
  })

  it('succeeds with correct credentials', function() {

    cy.get('[data-test-id="login-form"] input[name="Username"]').type(validUser.username)
    cy.get('[data-test-id="login-form"] input[name="Password"]').type(validUser.password)
    cy.contains('login').click()

    cy.contains('Logout')
    cy.contains('blogs')
    cy.get('[data-test-id="blog-form"]')

  })

  it('fails with wrong credentials', function() {
    cy.get('[data-test-id="login-form"] input[name="Username"]').type('invalidUsername')
    cy.get('[data-test-id="login-form"] input[name="Password"]').type('invalidPassword')
    cy.contains('login').click()

    cy.contains('invalid username or password')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
  })
})