
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

describe('Login', function() {
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

describe('When logged in', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    cy.createUser({ ...validUser, name: 'TestName' })
    cy.login(validUser)
    cy.visit('http://localhost:3000')
  })

  it('A blog can be created', function() {

    const newBlog = {
      title: 'Test title',
      author: 'Test author',
      url: 'www.testurl.com'
    }

    cy.contains('new blog').click()
    cy.get('[data-test-id="blog-form"] input[name="title"]').type(newBlog.title)
    cy.get('[data-test-id="blog-form"] input[name="author"]').type(newBlog.author)
    cy.get('[data-test-id="blog-form"] input[name="url"]').type(newBlog.url)
    cy.get('[data-test-id="blog-form"]').contains('create').click()

    cy.contains(`a new blog ${newBlog.title} by ${newBlog.author}`)
      .should('have.css', 'color', 'rgb(0, 128, 0)')
  })
})
