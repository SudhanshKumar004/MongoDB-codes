import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import { VscEdit } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom'


const Update = () => {
  const[mydata , setMydata] = useState([])

  let nav = useNavigate();
  


  const loadData = () =>{
    const api = "http://localhost:8000/employee/datadisplay";
    axios.get(api).then((res)=>{
      console.log(res.data);
      
      setMydata(res.data)
    })
  }

  const myEdit = (id) =>{
    nav(`/editdata/${id}
      `
    )
  }

  const mydel = async(id) =>{
    let api = `http://localhost:8000/employee/delete?empid=${id}`
    let res = await axios.get(api)
    alert(res.data)

    loadData()
  }

  useEffect(()=>{
    loadData()
  },[])

  const ans = mydata.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.empno}</td>
        <td>{key.empname}</td>
        <td>{key.department}</td>
        <td>{key.city}</td>
        <td>{key.salary}</td>
        <td><MdDelete id='btn' onClick={()=>{mydel(key._id)}} /></td>
        <td><VscEdit id='btn' onClick={()=>{myEdit(key._id)}} /></td>
      </tr>
      </>
    )
  })

  return (
    <>
      <h1 align="center" style={{padding:"10px" , color:"black"}}>Update Details</h1>
      <div className="over">
      <Table striped bordered hover className='custom-table2'>
      <thead>
        <tr>
          <th>Emp No.</th>
          <th>Name</th>
          <th>Department</th>
          <th>City</th>
          <th>Salary</th>
          <th>Delete</th>
          <th>Edit</th>
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

export default Update
