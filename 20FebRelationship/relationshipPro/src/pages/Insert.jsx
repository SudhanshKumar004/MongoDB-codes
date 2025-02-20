import { useState } from 'react'
import axios from 'axios'

const Insert= () => {

     const[input,setInput] = useState({})


  const handleInput=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInput(values=>({...values,[name]:value}))
    console.log(input)
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      let api = "http://localhost:8000/user/insertdata";
      let response = await axios.post(api, input)
      console.log(response);
      alert(response.data)
      
    } catch (error) {
      console.log(error);
      alert("error Caught")
    }
  }
  return (
    <>
      <div>
        Enter Username: <input type="text" name="username" value={input.username} onChange={handleInput} /><br />
        Enter Email: <input type="text" name="email" value={input.email} onChange={handleInput} /><br />
        Enter First Name: <input type="text" name="firstname" value={input.firstname} onChange={handleInput} /> <br />
        Enter Last Name: <input type="text" name="lastname" value={input.lastname} onChange={handleInput} /><br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      
    </>
  )

}
export default Insert
