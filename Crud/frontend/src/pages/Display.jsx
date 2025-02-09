import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios' 

const Display = () => {
const[mydata , setMydata] = useState([])

  const loadData = () =>{
    const api = ("http://localhost:8000/library/datadisplay")
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
        <td>{key.id}</td>
        <td>{key.name}</td>
        <td>{key.bkname}</td>
        <td>{key.rate}/- Rs.</td>
        <td>{key.num}</td>
      </tr>
      </>
    )
  })

  useEffect(()=>{
    loadData();
  },[])

  return (
    <>
    <h1 align="center" style={{padding:"10px" , color:"darkslategray" , textShadow:"0 0 1px black ,0 0 5px silver"}}>Book Details</h1>
      <Table striped bordered hover className='custom-table'>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Name</th>
          <th>Book Name</th>
          <th>Price</th>
          <th>Contact No.</th>
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
