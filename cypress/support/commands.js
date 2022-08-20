const API_PORT = Cypress.env('API_PORT')

Cypress.Commands.add('createUser', ({ username, name, password }) => {
  cy.request('POST', `http://localhost:${API_PORT}/api/users`, {
    username, name, password
  })
})

Cypress.Commands.add('login', ({ username, password }) => {
  cy.request('POST', `http://localhost:${API_PORT}/api/login`, {
    username, password
  }).then(({ body }) => {
    localStorage.setItem('loggedBlogListappUser', JSON.stringify(body))
  })
})

Cypress.Commands.add('logout', () => {
  window.localStorage.removeItem('loggedBlogListappUser')
})

Cypress.Commands.add('createBlog', ({ title, author, url }) => {
  cy.request({
    url: `http://localhost:${API_PORT}/api/blogs`,
    method: 'POST',
    body: { title, author, url },
    headers: {
      'Authorization': `bearer ${JSON.parse(localStorage.getItem('loggedBlogListappUser')).token}`
    }
  })
})