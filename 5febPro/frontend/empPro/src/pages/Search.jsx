import { message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Search = () => {

  const [search, setSearch ] = useState("")
  const [mydata, setMydata ] = useState([])


  const handleSubmit = () =>{
    const api = "http://localhost:8000/employee/searchdata";
    axios.post(api , {searchno:search}).then((res)=>{
      setMydata(res.data)
      message.success("Data Searched")
      
    })
  }

  const ans = mydata.map((key)=>{
    return(
      <>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{key.empnm}</ListGroup.Item>
        <ListGroup.Item>{key.designation}</ListGroup.Item>
        <ListGroup.Item>{key.salary}</ListGroup.Item>
      </ListGroup>
    </Card>
      </>
    )
  })
  return (
    <>
      <h2>Search Data</h2>
      Enter Emp No. <input type="text" name="empno" onChange={(e)=>{setSearch(e.target.value)}} />
      <button onClick={handleSubmit}>Search</button>

      <hr />

       {ans}
    </>
  )
}

export default Search
