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
    nav("/dashboard")
  }
  }

  useEffect(()=>{
    userAuthenticate()
  },[])
  return (
    <>
    <div className='homecontainer'>
      <h1 className='hometitle'>Welcome to Home Page</h1>
      </div>
    </>
  )
}

export default Home
