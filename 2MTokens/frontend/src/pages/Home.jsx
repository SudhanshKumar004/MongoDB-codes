import React, { useEffect } from 'react'
import API_URL from './API_URL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const nav = useNavigate();


  const userAuthenticate =async () =>{
    const token = localStorage.getItem("token");
    if(token)
    {let api = `${API_URL}/user/authentication`
    const response = await axios.post(api,null ,{headers:{"x-auth-token": token}})
    console.log(response.data);
    localStorage.setItem("username" , response.data.name)
    localStorage.setItem("email" , response.data.email)
    nav("/dashboard")
  }
  }

  useEffect(()=>{
    userAuthenticate()
  },[])
  return (
    <>
      <h1>Welcome to Home Page</h1>
    </>
  )
}

export default Home
