import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Display = () => {

  let[mydata, setMydata] = useState([])

  const datashow = () =>{
    let api = "http://localhost:8088/students/displaydata"
    axios.get(api).then((res)=>{
      setMydata(res.data)
    })
  }

  const ans = mydata.map((key)=>{
    return(
      <>

      <tr>
        <td>{key.rollno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
      </tr>
      </>
    )
  })

  useEffect(()=>{
    datashow()
  }  , [])
  return (
    <>
      <h1>Display of Data</h1>
      <table border="2" align='center' >
          <tr>
            <th>Roll No.</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
          </tr>
          {ans}
      </table>
    </>
  )
}

export default Display
