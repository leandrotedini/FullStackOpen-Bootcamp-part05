import { useState, useEffect } from 'react'
import noteService from './services/blogs'
import BlogList from './components/BlogList'
import LoginForm from './components/LoginForm'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogListappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])
  
  const logout = () =>{
    window.localStorage.removeItem('loggedBlogListappUser')
    setUser(null)
    noteService.setToken('')
  }

  return (
    <div>
      {user === null
      ? <LoginForm setUser={setUser}/>
      : <><button onClick={logout}>Logout</button><BlogList/></>
      }
    </div>
  )
}

export default App
