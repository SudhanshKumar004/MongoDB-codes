import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


const Insert = () => {
    const[input, setInput] = useState({})

    const handleInput=(e)=>{
      let name = e.target.name;
      let value = e.target.value;
      setInput((values)=>({...values , [name]:value}))
      console.log(input);
      
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      let api = "http://localhost:8000/employee/datasave";
      axios.post(api , input).then((res)=>{
          alert(res.data)
          
      })
      console.log(input);
      
    }
  return (
    <>
      <div className="wrap">
      <h1>Application form</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Emp No.</Form.Label>
        <Form.Control type="text" name='empnm ' onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" name='designation' onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" name='salary' onChange={handleInput}/>
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
