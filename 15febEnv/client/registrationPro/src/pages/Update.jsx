import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';





const Update = () => {
  const [ mydata, setMydata ] = useState([])

  const nav = useNavigate();
  const loadData = async()=>{
    try {
      let api = "http://localhost:8080/employee/displaydata"
    let res = await axios.get(api)
    setMydata(res.data);
    console.log(res.data);
    } catch (error) {
      console.log(error);
      alert("Cannot Load Data!")  
    }
    
  }


  const mydel= async(id)=>{
    
    try {
    let api = "http://localhost:8080/employee/deletedata"
    let res = await axios.post(api , {empid:id})
    alert(res.data)
    
    loadData();

    } catch (error) {
      console.log(error);
      alert("cannot delete!")
    }
  }

  const myedit = async (id) =>{
    try {
        nav(`/edit/${id}`)


    } catch (error) {
      alert("Error Navigating:(")
    }
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
        <td><MdDelete onClick={()=>{mydel(key._id)}} style={{cursor:"pointer"}} /></td>
        <td><MdModeEdit onClick={()=>{myedit(key._id)}} style={{cursor:"pointer"}} /></td>
      </tr>
      </>
    )
  })

  useEffect(()=>{
    loadData();
  },[])
  return (
    <>
      <h1 align='center'>Update Details</h1>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Emp ID</th>
          <th>Employee Name</th>
          <th>department</th>
          <th>City</th>
          <th>Salary</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
       {ans}
      </tbody>
    </Table>
    </>
  )}

export default Update
