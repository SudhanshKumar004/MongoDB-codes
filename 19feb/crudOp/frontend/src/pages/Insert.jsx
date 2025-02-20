import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'


const Insert = () => {
    const [input,setInput] = useState({})


    const handleinput = (e) =>{
        let {name,value} = e.target;
        setInput(values=>({...values, [name]:value}))
        console.log(input);
    }

    const handleSubmit=async()=>{
        let api = "http://localhost:8080/employee/insert"
        try {
        let res = await axios.post(api,input)
        console.log(res.data);
                    
        } 
        catch (error) {
            alert(res)
        }
    }
  return (
    <>
    <div className="formm">
      <h1 align='center'>Insert Information</h1>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Label>Enter ID</Form.Label>
        <Form.Control type="text" name='empid' value={input.empid} onChange={handleinput} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name='empname' value={input.empname} onChange={handleinput} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name='city' value={input.city} onChange={handleinput} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Label>Enter Department</Form.Label>
        <Form.Control type="text" name='department' value={input.department} onChange={handleinput} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Label>Enter Salary</Form.Label>
        <Form.Control type="text" name='salary' value={input.salary} onChange={handleinput} />
        
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
    </>
  )
}

export default Insert
