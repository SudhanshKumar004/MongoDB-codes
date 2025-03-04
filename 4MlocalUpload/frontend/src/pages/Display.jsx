import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Display = () => {

  const [mydata,setMydata] = useState([]);

const loadData = async () =>{
    let api = "http://localhost:8080/user/datadisplay"

    let response = await axios.get(api);

    console.log(response.data);
    setMydata(response.data)
  }

  const ans = mydata.map((key)=>{
    return(
      <>
      <tr>
        <td><img src={`http://localhost:8080/uploads/${key.img}`} width={150} height={150} /></td>
        <td>{key.empno}</td>
        <td>{key.name}</td>
        <td>{key.salary}</td>
        <td>{key.designation}</td>
      </tr>
      
      </>
    )
  })

  useEffect(()=>{
    loadData();
  },[])
  return (
    <>
      <h1>Display</h1>

      <hr />

      <table border={1}>
        <thead>
          <tr>
            <th></th>
            <th>Emp No.</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Designation</th>
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
