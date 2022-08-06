import { useState, useEffect } from 'react'
import blogService from '../services/blogs'
import Blog from "./Blog"

const BlogsList = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  return <>
    <h2>blogs</h2>
    {blogs.map(blog =>
      <Blog key={blog.id} blog={blog} />
    )}
    </>
}

export default BlogsList