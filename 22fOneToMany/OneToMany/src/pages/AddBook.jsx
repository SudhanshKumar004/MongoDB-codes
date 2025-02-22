import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AddBook = () => {

  const [mydata,setMydata] = useState([])
  let nav = useNavigate()


  const loadData=async()=>{
     let api = "http://localhost:8080/user/datadisplay"
        try {
            let response = await axios.get(api);
            setMydata(response.data);
            
        } catch (error) {
            console.log(error);
            
        }
  }

  const ans = mydata.map((key)=>{
      return(
        <>
        <tr>
          <td>{key.authorName}</td>
          <td>{key.email}</td>
          <td>{key.city}</td>
          <td><button onClick={()=>{nav( `/addnewbook/${key._id}`)}}>Add Book</button></td>
        </tr>
        </>
      )
  })

  useEffect(()=>{
    loadData()
  },[])
  return (
    <div>
      <h1>Add Book</h1>
    <table width={300}>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>City</th>
        <th></th>
      </tr>
      {ans}
    </table>

    </div>
  )
}

export default AddBook
