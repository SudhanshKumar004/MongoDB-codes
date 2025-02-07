import React, { useContext } from 'react'
import Comp4 from './Comp4'
import { myContext } from './App'


const Comp3 = () => {
    const{user,setUser} = useContext(myContext)
  return (
    <>
      <h1>Comp 3 : {user}</h1>
      <button onClick={()=>{setUser("Sudhansh")}}>Click</button>
      <Comp4 />
    </>
  )
}

export default Comp3
