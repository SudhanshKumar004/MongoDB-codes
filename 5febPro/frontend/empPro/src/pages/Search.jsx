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
        <Card style={{ width: '18rem' }} className='cardS'>
      <Card.Body className='cb'>
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
      <h2 align="center" className='sd'>Search Data</h2>
      <div className="searchd">
      <h1>Enter Emp No. :</h1><input type="text" name="empno" onChange={(e)=>{setSearch(e.target.value)}} />
      <button onClick={handleSubmit}>Search</button>
      </div>
      <hr />

       {ans}
    </>
  )
}

export default Search
