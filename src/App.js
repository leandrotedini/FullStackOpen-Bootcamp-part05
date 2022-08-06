import { useState } from 'react'
import BlogList from './components/BlogList'
import LoginForm from './components/LoginForm'

const App = () => {
  const [user, setUser] = useState(null)


  

  return (
    <div>
      {user === null
      ? <LoginForm setUser={setUser}/>
      : <BlogList/>
      }
    </div>
  )
}

export default App
