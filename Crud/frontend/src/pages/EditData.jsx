import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditData = () => {
const {id} = useParams();
const[mydata, setMydata] = useState({})
const nav = useNavigate();


const loadData=async()=>{
  let api = "http://localhost:8000/library/editdatashow"
  let res = await axios.post(api ,{bookid:id})
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
    let api = "http://localhost:8000/library/editdatasave"
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

      Enter Id : <input type="text" name="id" value={mydata.id} onChange={handleInput}  /> <br />

      Enter Name : <input type="text" name="name" value={mydata.name} onChange={handleInput}  /> <br />

      Enter Book Name : <input type="text" name="bkname" value={mydata.bkname} onChange={handleInput}  /> <br />

      Enter Price : <input type="text" name="rate" value={mydata.rate}  onChange={handleInput} /> <br />

      Enter Number : <input type="text" name="num" value={mydata.num} onChange={handleInput} /> <br />
      
      <button onClick={handleSubmit}>Submit Details</button>
    </div>
    </>
  )
}

export default EditData
