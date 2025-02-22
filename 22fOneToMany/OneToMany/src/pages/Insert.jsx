import React, { useState } from 'react'
import axios from 'axios'

const Insert = () => {
    const [input , setInput] = useState({})

    const handleInput=(e)=>{
        const {name,value} = e.target;
        setInput(values=>({...values,[name]:value}))
        console.log(input);
        
    }
    
    const handleSubmit= async ()=>{
        let api = "http://localhost:8080/user/datasave"
        try {
            let response = await axios.post(api, input);
            alert(response.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <>
      <h1>Add Author</h1>

      Enter Author Name : <input type="text" name='name' value={input.name} onChange={handleInput} /> <br />
      Enter Author Email : <input type="text" name='email' value={input.email} onChange={handleInput} /> <br />
      Enter Author City : <input type="text" name='city' value={input.city} onChange={handleInput} /> <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Insert
