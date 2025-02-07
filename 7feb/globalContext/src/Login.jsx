import React, { useContext, useState } from 'react'
import { myContext } from './GlobalContext'


const Login = () => {
const { user , login } = useContext(myContext);
const[val,setVal] = useState("")
    return (
    <>
      <h1>Enter Name: <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} /></h1>
      <button onClick={()=>{login(val)}}>Login</button>
    </>
  )
}

export default Login
