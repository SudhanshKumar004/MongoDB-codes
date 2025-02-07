import React, { useContext } from 'react'
import {MyContext } from './GlobalContext'


const Logout = () => {
    const {user,logout} = useContext(MyContext)
  return (
    <>
      <h3>Welcome : {user.name}</h3>
      <button onClick={()=>{logout()}}>Logout</button>
    </>
  )
}

export default Logout
