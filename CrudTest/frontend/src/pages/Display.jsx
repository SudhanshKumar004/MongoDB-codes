import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios' 

const Display = () => {
const[mydata , setMydata] = useState([])

  const loadData = () =>{
    const api = ("http://localhost:8000/employee/datadisplay")
    axios.get(api).then((res)=>{
      console.log(res.data);
      
      setMydata(res.data)
    })
  }
  let a = 0;
  const ans = mydata.map((key)=>{
    a++;
    return(
      <>
      <tr>
        <td>{a}</td>
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
    <h1 align="center" style={{padding:"10px" , color:"black"}}>Book Details</h1>
      <div className="over">
      <Table striped bordered hover className='custom-table'>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>City</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default Display
