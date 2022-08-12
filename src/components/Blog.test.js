import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'

test('renders content', () => {
  const user = {
    username: '@Test',
    name: 'Test Name',
    id: '62e72a6b5c7e15ac4063b081'
  }

  const blog = {
    title: 'Test title',
    author: 'Test Author',
    url: 'Test URL',
    likes: 4,
    user: {
      username: '@Test2',
      name: 'Test Name',
      id: '62e72a6b5c7e15ac4063b081'
    },
    id: '62f462c0c449384f0074505f'
  }

  const component = render(
    <Blog blog={blog} user={user}/>
  )

  expect(component.container).toHaveTextContent(
    'Test title'
  )

  const title = component.getByText('Test title')
  expect(title).toBeDefined()
  expect(title).toHaveStyle('display: block')

  const author = component.getByText('Test Author')
  expect(author.parentNode).toHaveStyle('display: none')
})