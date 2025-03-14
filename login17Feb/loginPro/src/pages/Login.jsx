import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {message} from "antd";
import { useNavigate } from 'react-router-dom';

const Login=()=>{
  const [input, setInput] = useState({});
  const navigate= useNavigate();
  const handleInput=(e)=>{
    let name=e.target.name;
    let value= e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    let api="http://localhost:8080/employee/login";   
    try {
          const response= await axios.post(api, input);
          console.log(response.data.email);
          if (response.status==200)
          {
            localStorage.setItem("username", response.data.name);
            localStorage.setItem("useremail", response.data.email);
            navigate("/dashboard");
          }
         

    } catch (error) {
         alert(error.response.data.msg);
    }
  }
  return(
        <>
          <h1> User Login</h1>

<Form style={{width:"400px"}}>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Enter email</Form.Label>
<Form.Control type="email"  name="email"  value={input.email} onChange={handleInput}  />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Enter password</Form.Label>
<Form.Control type="password"  name="password"  value={input.password} onChange={handleInput}  />
</Form.Group>
<Button variant="primary" type="submit" onClick={handleSubmit}>
  Login
</Button>
</Form>

        </>
    )
}

export default Login;