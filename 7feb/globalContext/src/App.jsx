import React, { useContext } from 'react'
import { myContext } from './GlobalContext'
import Logout from './Logout';
import Login from './Login';


const App = () => {
    const { user } = useContext(myContext);
  return (
    <>
      <h1>My App</h1>
      {user.auth ? <Logout /> : <Login />}
    </>
  )
}

export default App
