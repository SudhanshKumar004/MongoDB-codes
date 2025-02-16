import axios from 'axios'
import React, { useState } from 'react'

const Search = () => {
  const [search,setSearch] = useState("")
  const [mydata, setMydata] = useState([])


  const handleSubmit= async()=>{
    let api = "http://localhost:8080/employee/searchdata"
    let res = await axios.post(api , {searchid:search})
    setMydata(res.data)    
  }

  const ans = mydata.map((key)=>{
    return(
    <>
    <div style={{border:"1px solid grey"}}>
        <h2>Emp No.: {key.empno}</h2>
        <h1>Emp Name: {key.empname}</h1>
        <h2>Department: {key.department}</h2>
        <h2>City: {key.city}</h2>
        <h3>Salary: {key.salary}</h3>
    </div>
    
    </>
    )
  })
  return (
    <>
      <h1>Search Employee</h1>

      Enter Employee ID : <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
      <button onClick={handleSubmit}>Search</button>
      <hr />

      {ans}
    </>
  )
}

export default Search
