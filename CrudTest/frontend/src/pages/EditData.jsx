import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditData = () => {
const {id} = useParams();
const[mydata, setMydata] = useState({})
const nav = useNavigate();


const loadData=async()=>{
  let api = "http://localhost:8000/employee/editdatashow"
  let res = await axios.post(api ,{empid:id})
   setMydata(res.data)
}
const handleInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    setMydata((values)=>({...values , [name]: value}))
    console.log(mydata);
    
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    let api = "http://localhost:8000/employee/editdatasave"
    let res = await axios.post(api , mydata)
    alert(res.data)
    nav('/update')

  }

  useEffect(()=>{
    loadData();
  },[])

  return (
    <>
      <h1 align="center">Insert Data Form</h1>
    <div id="form">

      Enter Emp No. : <input type="text" name="empno" value={mydata.empno} onChange={handleInput}  /> <br />

      Enter Name : <input type="text" name="empname" value={mydata.empname} onChange={handleInput}  /> <br />

      Enter Department : <input type="text" name="department" value={mydata.department} onChange={handleInput}  /> <br />

      Enter City : <input type="text" name="city" value={mydata.city}  onChange={handleInput} /> <br />

      Enter Salary : <input type="text" name="salary" value={mydata.salary} onChange={handleInput} /> <br />
      
      <button onClick={handleSubmit}>Submit Details</button>
    </div>
    </>
  )
}

export default EditData
