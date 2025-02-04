import React, { useState } from 'react'
import axios from 'axios'

const Insert = () => {

    let[input , setInput] = useState({
      rollno:"",
      name:"",
      city:"",
      fees:""

    });

    const hinput = (e) =>{
        const { name , value} = e.target;
        setInput({
            ...input,
            [name]:value
        })
          console.log(value);
    }

    const handlesubmit = () =>{
        const api = "http://localhost:8088/students/savedata"
        axios.post(api , input).then((res)=>{
            console.log(res.data);
            alert("Data Submited")
            
        })
    }
  return (
    <>
      <h1>Insert Data</h1>

      Enter Roll No.: <input type="text" name="rollno" value={input.rollno} onChange={hinput}  /> <br />
      Enter Name: <input type="text" name="name" value={input.name} onChange={hinput}  /> <br />
      Enter City: <input type="text" name="city" value={input.city} onChange={hinput}  /> <br />
      Enter Fees: <input type="text" name="fees" value={input.fees} onChange={hinput}  /> <br />

      <button onClick={handlesubmit}>Submit</button>
    </>
  )
}

export default Insert
