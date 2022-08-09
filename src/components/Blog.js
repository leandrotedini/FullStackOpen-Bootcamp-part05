import { useState } from "react"

const Blog = ({blog}) => {

  const [visible, setVisible] = useState(false)

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

  return (
    <div style={blogStyle}>
      <p>{blog.title} <button onClick={toggleVisibility}>{buttonName}</button> </p>
      <div style={showWhenVisible}>
        <p>{blog.url}</p>
        <p>likes {blog.likes}</p>
        <p>{blog.author}</p>
      </div>
    </div>
  )
}

export default Blog