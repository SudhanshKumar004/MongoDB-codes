import React, { useState } from 'react'
import axios from 'axios'

const Insert = () => {
    const [input, setInput] = useState({})
    const [selectedfile, setSelectedFile] = useState("")

    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        setInput(values=>({...values, [name]:value}))
        console.log(input);
    }

    const handleFile = (e) =>{
        setSelectedFile(e.target.files[0]);
        console.log(selectedfile);
        
    }

    const handleSubmit = async() =>{
        const formData = new FormData();
        formData.append("file" , selectedfile)
        formData.append("upload_preset" , "myphotos")
        formData.append("cloud_name", "dbegi71ih")
        const api = "http://api.cloudinary.com/v1_1/dbegi71ih/image/upload"
        let response = await axios.post(api,formData)
        console.log(response.data.url);

        let api1 = "http://localhost:8080/user/datasave";

        let response1 = await axios.post(api1, {imgname:response.data.url , ...input})

        console.log(response1.data);
        alert("saved");
        
    }
  return (
    <>
      <div className="formcontainer">
  <label>Enter Name:</label>
  <input type="text" name="name" onChange={handleInput} />
  
  <label>Enter City:</label>
  <input type="text" name="city" onChange={handleInput} />
  
  <label>Enter Age:</label>
  <input type="text" name="age" onChange={handleInput} />
  
  <label>Enter Image:</label>
  <input type="file" name='imgname' onChange={handleFile} />
  
  <button onClick={handleSubmit}>Submit</button>
</div>

    </>
  )
}

export default Insert
