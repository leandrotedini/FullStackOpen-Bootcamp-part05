import { useState, useEffect } from 'react'
import blogService from '../services/blogs'
import Blog from "./Blog"
import BlogForm from './BlogForm'

const BlogsList = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  const addBlog = (newBlog) => {
    setBlogs([ ...blogs, newBlog ])
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