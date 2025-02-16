import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'


const Display = () => {
  const [ mydata, setMydata ] = useState([])

  const loadData = async()=>{
    let api = "http://localhost:8080/employee/displaydata"
    let res = await axios.get(api)
    setMydata(res.data);
    console.log(res.data);
    
  }

  const ans = mydata.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.empno}</td>
        <td>{key.empname}</td>
        <td>{key.department}</td>
        <td>{key.city}</td>
        <td>{key.salary}</td>
      </tr>
      </>
    )
  })

  useEffect(()=>{
    loadData();
  },[])
  return (
    <>
      <h1 align='center'>Employee Details</h1>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Emp ID</th>
          <th>Employee Name</th>
          <th>department</th>
          <th>City</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
       {ans}
      </tbody>
    </Table>
    </>
  )
}

export default Display
