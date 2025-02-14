import React, { useState } from 'react'
import axios from 'axios'
import {message} from 'antd' 

const Insert = () => {

  const [input, setInput] = useState({
  id:"",
  name: "",
  bkname: "",
  rate: "", 
  num: "",
});



  const handleInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    setInput((values)=>({...values , [name]: value}))
    console.log(input);
    
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    let api = "http://localhost:8000/library/datasave";
    axios.post(api , input).then((res)=>{
    console.log(res);
    alert(res.data) 
    })

  }
  return (
    <>
      <h1 align="center">Insert Data Form</h1>
    <div id="form">

      Enter Id : <input type="text" name="id" value={input.id} onChange={handleInput}  /> <br />

      Enter Name : <input type="text" name="name" value={input.name} onChange={handleInput}  /> <br />

      Enter Book Name : <input type="text" name="bkname" value={input.bkname} onChange={handleInput}  /> <br />

      Enter Price : <input type="text" name="rate" value={input.rate}  onChange={handleInput} /> <br />

      Enter Number : <input type="text" name="num" value={input.num} onChange={handleInput} /> <br />
      
      <button onClick={handleSubmit}>Submit Details</button>
    </div>
    </>
  )
}

export default Insert
