import React from 'react'
import axios from 'axios'

const App = () => {
  const handleHome=async()=>{
    let api = "http://localhost:8080/employee/myhome";
    
    try {
    let res = await axios.get(api);
    alert(res.data);
  
    } 
    
    catch (error) {
    alert(error.response.data.msg);
          
    }
    
  }
  const handleAbout=async()=>{
    let api = "http://localhost:8080/employee/myabout";
    
    try {
    let res = await axios.get(api);
    alert(res.data);
  
    } 
    
    catch (error) {
    alert(error.response.data.msg);
          
    }
    
  }
  return (
    <>
      <button onClick={handleHome}>home</button>
      <button onClick={handleAbout}>About</button>
    </>
  )
}

export default App
