import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'


const Display = () => {
  const [empData, setEmpdata] = useState([])

  const loadData=() =>{
    const api = "http://localhost:8000/employee/displaydata"
    axios.get(api).then((res)=>{
      setEmpdata(res.data)
    })
  }

  let a=0;
  const ans = empData.map((key)=>{
    {a++}
    return(
      <>
      <tr>
        <td>{a}</td>
        <td>{key.empnm}</td>
        <td>{key.name}</td>
        <td>{key.designation}</td>
        <td>{key.salary}</td>
      </tr>
      </>
    )
  })
  useEffect(()=>{
    loadData()
  },[])
  return (
    <>
      <h1>Employee Data</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Employee No.</th>
          <th>Name</th>
          <th>Designation</th>
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
