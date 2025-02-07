import React, { useContext } from 'react'
import Logout from './Logout'
import Login from './Login'
import { MyContext } from './GlobalContext'

const App = () => {
    const {user} = useContext(MyContext) 
  return (
    <>
    <h1>My Login App</h1>
    {user.auth} ? <Logout /> : <Login />    
      
    </>
  )
}

export default App
