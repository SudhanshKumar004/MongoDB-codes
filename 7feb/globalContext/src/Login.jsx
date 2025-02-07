import React, { useContext, useState } from 'react'
import { MyContext } from './GlobalContext'

const Login = () => {
    const [val,setVal] = useState("")
    const {Login} = useContext(MyContext)

  return (
    <>
        Enter Name: <input type="text" value={val} onChange={()=>{setVal(e.target.value)}} />
        <button onClick={()=>{Login(val)}}>Login</button>  
    </>
  )
}

export default Login
