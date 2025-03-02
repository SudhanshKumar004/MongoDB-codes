import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const DashBoard=()=>{


    const navigate = useNavigate();
  const logout=()=>{
       localStorage.clear();
       navigate("/home");
  }


  useEffect(()=>{
    const token= localStorage.getItem("token");
      if(!token)
      {
        navigate("/home");        
      }
  })





    return(
        <>
        <div style={{backgroundColor:"darkslategrey", padding:"20px"}}>
        <h1 style={{color:"white"}}> User Dashboard</h1>
        </div>

        Welcome : {localStorage.getItem("username")}
        Email : {localStorage.getItem("useremail")}

        <a href="#" onClick={logout}> Logout </a> 
          
        </>
    )
}

export default DashBoard;