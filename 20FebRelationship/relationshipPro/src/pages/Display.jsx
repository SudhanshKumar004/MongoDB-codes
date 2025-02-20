import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Display = () => {
  const [ mydata, setMydata ] = useState([])

  const loadData = async()=>{
    let api = "http://localhost:8000/user/displaydata"
    let res = await axios.get(api)
    setMydata(res.data);
    console.log(res.data);
    
  }

  const ans = mydata.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.firstname}</td>
        <td>{key.lastname}</td>
        <td>{key.userid.email}</td>
        <td>{key.userid.username}</td>
      </tr>
      </>
    )
  })

  useEffect(()=>{
    loadData();
  },[])
  return (
    <>
      <h1 align='center'>Employee Details</h1>

    <table>
      <thead>
        <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>UserName</th>
        </tr>
      </thead>
      <tbody>
       {ans}
      </tbody>
    </table>
    </>
  )
}

export default Display
