import React from 'react'
import { useContext } from 'react'
import { myContext } from './App'

const Comp5 = () => {
    const {user, setUser} = useContext(myContext)
  return (
    <>
      <h1>Comp 5 : {user}</h1>
      <button onClick={()=>{setUser("Suraj")}}>Click</button>
    </>
  )
}

export default Comp5
