import React from 'react'
import axios from 'axios'

const App = () => {
    const handle1=async()=>{
    let api = "http://localhost:8000/myhome"
    let res = await axios.get(api);
    console.log(res);
    
  }
    const handle2=async()=>{
    let api = "http://localhost:8000/myabout"
    let res = await axios.get(api);
    console.log(res);
    
  }
  return (
    <>
      <button onClick={handle1}>Home</button>
      <button onClick={handle2}>About</button>
    </>
  )
}

export default App
