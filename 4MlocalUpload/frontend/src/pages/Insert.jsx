import React, { useState } from 'react'
import axios from 'axios'

const Insert = () => {
    const [input, setInput] = useState({})
    const [selectedFile , setSelectedFile] = useState("")

    const handleInput =(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput(values=>({...values, [name]:value}))
        console.log(input);
        
    }


    const handleImage=(e)=>{
        setSelectedFile(e.target.files[0])
        console.log(selectedFile);
        
    }

    const handleSubmit =async ()=>{

      let api = "http://localhost:8080/user/datasave";

      const formData = new FormData();
      formData.append("empno", input.empno);
      formData.append("name", input.name);
      formData.append("salary", input.salary);
      formData.append("designation", input.designation);
      formData.append("image", selectedFile);
        
      const response = await axios.post(api, formData)
      
      console.log(response.data);
      alert("Submitted Successfully!")
      
    }
  return (
    <>
      <h1>Insert Data</h1>


      Enter Employee No. <input type="text" name="empno" onChange={handleInput} /> <br />

      Enter Name. <input type="text" name="name" onChange={handleInput} /> <br />

      Enter Salary. <input type="text" name="salary" onChange={handleInput} /> <br />

      Enter Dasignation. <input type="text" name="designation" onChange={handleInput} /> <br />

      Enter Image. <input type="file" name='imgname' onChange={handleImage} /> <br />

      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Insert
