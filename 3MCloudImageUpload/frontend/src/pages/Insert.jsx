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


    const handlefile =(e)=>{
        setSelectedFile(e.target.files[0])
        console.log(selectedFile);
        
    }

    const handleSubmit =async ()=>{
        const formData = new FormData();
        formData.append("file", selectedFile)
        formData.append("upload_preset" , "xuhml8kg")
        formData.append("cloud_name" , "dbegi71ih")
        const api = "http://api.cloudinary.com/v1_1/dbegi71ih/image/upload"
        const response = await axios.post(api,formData);
        console.log(response.data);

        const api1 = "http://localhost:8080/user/datasave";
        const response1 = await axios.post(api1 , {imgname:response.data.url, ...input})
        console.log(response1.data);
        alert("saved")
        
        
    }
  return (
    <>
      <h1>Insert Data</h1>


      Enter RollNo. <input type="text" name="rollno" onChange={handleInput} /> <br />
      Enter Name. <input type="text" name="name" onChange={handleInput} /> <br />
      Enter City. <input type="text" name="city" onChange={handleInput} /> <br />
      Enter Image. <input type="file" name='imgname' onChange={handlefile} />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Insert
