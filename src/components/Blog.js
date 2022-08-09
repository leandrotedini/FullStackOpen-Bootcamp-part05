import { useState } from "react"
import blogService from '../services/blogs'

const Blog = ({blog}) => {

  const [ visible, setVisible ] = useState(false)
  const [ likes, setLikes ] = useState(blog.likes)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const showWhenVisible = { display: visible ? '' : 'none' }
  
  let buttonName = visible ? 'hide' : 'view'

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const incrementLikes = (blog) => {

    const likes = blog.likes + 1
    const updatedBlog = {...blog, likes: likes }

    blogService.update(updatedBlog)
      .then(response =>  setLikes(prevState => prevState + 1))
      .catch(e => console.log(e))
  }

  return (
    <div style={blogStyle}>
      <p>{blog.title} <button onClick={toggleVisibility}>{buttonName}</button></p>
      <div style={showWhenVisible}>
        <p>{blog.url}</p>
        <p>likes {likes}<button onClick={() => incrementLikes(blog)}>like</button></p>
        <p>{blog.author}</p>
      </div>
    </div>
  )
}

export default Blog