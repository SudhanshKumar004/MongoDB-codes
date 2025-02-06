import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

const EmpEdit = () => {

    const {id} = useParams()
    const[mydata ,setMydata] = useState({})
    const nav = useNavigate()

    const loadData=async()=>{
        let api = "http://localhost:8000/employee/editdatashow"
        let res = await axios.post(api,{empid:id})
        console.log(res.data);
        
        setMydata(res.data)
    }
    
    useEffect(()=>{
        loadData()
    },[])


    const handleInput=(e)=>{
        const {name,value} = e.target;
        setMydata(values=>({...values , [name]:value}))
        console.log(mydata);  
    }

    const handleSumbit=async(e)=>{
        e.preventDefault();
        let api =  "http://localhost:8000/employee/editdatasave"
        let res = await axios.post(api , mydata);
        message.success(res.data)
        nav("/update")
        
    }

  return (
    <>
      <div className="wrap">
      <h1>Application form</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Emp No.</Form.Label>
        <Form.Control type="text" name='empnm' value={mydata.empnm} onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' value={mydata.name} onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" name='designation' value={mydata.designation} onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" name='salary' value={mydata.salary} onChange={handleInput}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handleSumbit} >
        Submit
      </Button>
    </Form>
    </div>

    </>
  )
}

export default EmpEdit
