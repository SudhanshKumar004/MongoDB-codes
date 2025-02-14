import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

const Insert = () => {

    const [input , setInput ] = useState({
        empno:"",
        empname:"",
        department:"",
        city:"",
        salary:""
    })


    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        setInput(values=>({...values , [name]:value}))
        console.log(input);
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        let api = "http://localhost:8000/employee/datasave"
         axios.post(api , input).then((res)=>{
    console.log(res);
    alert(res.data) 
    })
    }
  return (
    <>
    <div style={{ width: "60%", margin: 'auto' }}>
                <h1 align="center">Insert Data</h1>
                <Form>
                    <div className="row">
                        <div className="col-6">
                            <Form.Group controlId="empno">
                                <Form.Label>Employee No.:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="empno"
                                    value={input.empno}
                                    onChange={handleInput}
                                />
                            </Form.Group>
                        </div>
                        <div className="col-6">
                            <Form.Group controlId="empname">
                                <Form.Label>Employee Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="empname"
                                    value={input.empname}
                                    onChange={handleInput}
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Form.Group controlId="department">
                                <Form.Label>Department:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="department"
                                    value={input.department}
                                    onChange={handleInput}
                                />
                            </Form.Group>
                        </div>
                        <div className="col-6">
                            <Form.Group controlId="city">
                                <Form.Label>City:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="city"
                                    value={input.city}
                                    onChange={handleInput}
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Form.Group controlId="salary">
                                <Form.Label>Salary:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="salary"
                                    value={input.salary}
                                    onChange={handleInput}
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
    </>
  )
}

export default Insert
