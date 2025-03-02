import React, { useState } from 'react'
import API_URL from './API_URL'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Login = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const nav = useNavigate();


    const handleSubmit=async()=>{
        let api =   `${API_URL}/user/login`

        try {
        
            const response = await axios.post(api, {email:email, password:password})
            localStorage.setItem("token" , response.data.token);
            localStorage.setItem("name", response.data.name)
            nav("/dashboard")
            
        } 
        catch (error) {
            console.log(error);
            alert(response.data)
        }
    }
  return (
    <>
<h1>Login Page</h1>

    Enter Email: <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> 
    Enter Password: <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br /> 
      <button onClick={handleSubmit}>Login</button>
    </>
  )
}

export default Login