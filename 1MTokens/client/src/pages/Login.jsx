import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login=()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  const handleSubmit=async()=>{

    let api="http://localhost:8000/user/login";

    try {
    const response = await axios.post(api, {email:email, password:password});
    localStorage.setItem("token", response.data.token);
    navigate("/home");    
    } 
    catch (error) {
     console.log(error);
     alert(response.data.msg)
        
    }
    
  }
  
    return(
      <>
        <h1 align="center"> Login Page</h1>

        <div style={{border:"1px solid black", width:"20%", margin:"auto", padding:"20px"}}>
        Enter User Email : <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}  />
         <br />
         Enter Password : <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
         <br />
         <button onClick={handleSubmit} > Login!</button>

        </div>
               </>
    )
  }
  export default Login;