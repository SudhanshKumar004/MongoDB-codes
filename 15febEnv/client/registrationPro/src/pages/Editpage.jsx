import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Editpage = () => {
  const {id} = useParams();
  const nav  = useNavigate();

  const[input,setInput] = useState({})
  

  const loadData=async()=>{
    try {
    let api = "http://localhost:8080/employee/editshowdata"
    const res = await axios.post(api , {empid:id}) 
    setInput(res.data)
      
    } catch (error) {
      alert("Cannot fetch data")
    }
    
  }
  
    const handleInput=(e)=>{
      let name = e.target.name;
      let value = e.target.value;
      setInput(values=>({...values,[name]:value}))
      console.log(input)
    }



    const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      let api = "http://localhost:8080/employee/editsavedata";
      let response = await axios.post(api, input)
      console.log(response);
      alert(response.data)
      nav("/update")
      
    } catch (error) {
      console.log(error);
      alert("error Caught")
    }
  }

  useEffect(()=>{
    loadData()
  },[])
  return (
    <>
      <h1 align="center">Edit Details</h1>

      <Form style={{width:"400px", margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Emp No.</Form.Label>
        <Form.Control type="text" name='empno' value={input.empno} onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name='empname' value={input.empname} onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Department</Form.Label>
        <Form.Control type="text" name='department' value={input.department} onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" name='city' value={input.city} onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="number" name='salary' value={input.salary} onChange={handleInput} />
      </Form.Group>


      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </>
  )
}

export default Editpage
