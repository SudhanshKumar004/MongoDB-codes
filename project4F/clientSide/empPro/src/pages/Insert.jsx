import React, { useState } from 'react'
import axios from 'axios'
import  {message} from 'antd'
const Insert = () => {

  const [input , setInput ] = useState({})

  const handleInp = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((key)=>({...key , [name]:value}))
  }

  const subHandle = async() =>{
    let api = "http://localhost:8000/employee/datasave"
    let response =  await axios.post(api , input).then((res)=>
      {message.success("Data Submit!!") 
      console.log(res.data);
    })
  }
  return (
    <>
    <div className="form">
      <h1>Application Form</h1>

      Enter Employee No.: <input type="text" name="empno" onChange={handleInp} /> <br />
      Enter Name: <input type="text" name="name" onChange={handleInp} /> <br />
      Enter Department: <input type="text" name="dept" onChange={handleInp} /> <br />
      Enter Salary: <input type="text" name="salary" onChange={handleInp} /> <br />
      <button onClick={subHandle}>Submit</button>
    </div>

    </>
  )
}

export default Insert
