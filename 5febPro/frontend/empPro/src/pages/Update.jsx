import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';



const Update = () => {
  const [empData, setEmpdata] = useState([])
  let nav = useNavigate();

  const loadData=() =>{
    const api = "http://localhost:8000/employee/displaydata"
    axios.get(api).then((res)=>{
      setEmpdata(res.data)
    })
  }

  const mydel=async(id)=>{      
      let api = `http://localhost:8000/employee/mydelete/?empid=${id}`;
      const res = await axios.get(api)
      message.success(res.data)

    loadData()
  }

  const myUpdate= (id) =>{
    nav(`/empedit/${id}`)
  }
  const ans = empData.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.empnm}</td>
        <td>{key.name}</td>
        <td>{key.designation}</td>
        <td>{key.salary}</td>
        <td><MdDelete id='btn' onClick={()=>{mydel(key._id)}} /></td>
        <td><MdModeEdit id='btn' onClick={()=>{myUpdate(key._id)}}  /></td>
      </tr>
      </>
    )
  })
  useEffect(()=>{
    loadData()
  },[mydel])
  return (
    <>
      <h1 align="center" style={{color:"cadetblue", padding:"10px" , backgroundColor:"beige"}}>Edit Employee Info</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Employee No.</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Salary</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
    </Table>

    </>
  )
}

export default Update;
