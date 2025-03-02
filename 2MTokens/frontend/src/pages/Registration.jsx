import React, { useState } from 'react'
import API_URL from './API_URL';
import axios from "axios"
import { useNavigate } from 'react-router-dom';



const Registration = () => {
    const [input, setInput] = useState({})
    const nav = useNavigate();

    const handleinput=(e)=>{
            let name = e.target.name;
            let value = e.target.value;
            setInput(values=>({...values,[name]:value}))
            console.log(input);
            
    }

    const handleSubmit=async()=>{
        let api = `${API_URL}/user/registration`
        let response = await axios.post(api,input)
        console.log(response.data);
        nav("/login")
    }
  return (
    <>
      <h1>Registration</h1>

      Enter Name: <input type="text" name="name" value={input.name} onChange={handleinput} /> <br />
      Enter Email: <input type="text" name="email" value={input.email} onChange={handleinput} /> <br />
      Enter Password: <input type="text" name="password" value={input.password} onChange={handleinput} /> <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Registration
