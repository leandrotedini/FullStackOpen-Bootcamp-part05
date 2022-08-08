import { useState, useEffect } from 'react'
import blogService from '../services/blogs'
import Blog from "./Blog"
import BlogForm from './BlogForm'

const BlogsList = ({ showNotification }) => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  const addBlog = (newBlog) => {
    setBlogs([ ...blogs, newBlog ])
    showNotification({
      message: `a new blog ${newBlog.title} by ${newBlog.author}`,
      success: true
    })
  }

  return <>
    <h2>blogs</h2>
    {blogs.map(blog =>
      <Blog key={blog.id} blog={blog} />
    )}
    <BlogForm addBlog={addBlog}/>
    </>
}

export default BlogsList