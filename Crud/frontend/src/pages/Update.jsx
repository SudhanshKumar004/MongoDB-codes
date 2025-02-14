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
    let api = `http://localhost:8000/employee/delete?bookid=${id}`
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
        <td>{key.id}</td>
        <td>{key.name}</td>
        <td>{key.bkname}</td>
        <td>{key.rate}/- Rs.</td>
        <td>{key.num}</td>
        <td><MdDelete id='btn' onClick={()=>{mydel(key._id)}} /></td>
        <td><VscEdit id='btn' onClick={()=>{myEdit(key._id)}} /></td>
      </tr>
      </>
    )
  })

  return (
    <>
      <h1 align="center" style={{padding:"10px" , color:"darkslategray" , textShadow:"0 0 1px black ,0 0 5px silver"}}>Update Details</h1>
      <div className="over">
      <Table striped bordered hover className='custom-table2'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Book Name</th>
          <th>Price</th>
          <th>Contact No.</th>
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
