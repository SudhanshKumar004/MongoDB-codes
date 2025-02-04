import axios from 'axios';
import React, { useState } from 'react'

const Search = () => {

    let[rno , setRno] = useState("");
    let[searchdata, setSearchdata] = useState([])

    const searchHandle = () =>{
        let api = "http://localhost:8088/students/searchdata"
        axios.post(api , {stuRno:rno}).then((res)=>{
            console.log(res.data);
            setSearchdata(res.data)
            
        })
    }

    const myans = searchdata.map((key)=>{
        return(
            <>
            <h1>Name:{key.name} , city: {key.city}</h1>
            <h1>Roll No.{key.rollno}</h1>
            <h1>Fees: {key.fees}</h1>
            </>
        )
    })

  return (
    <>
     <h1>Search Data</h1>
     Enter Rollno: <input type="text" name="rollno" onChange={(e)=>{setRno(e.target.value)}}/>
     <button onClick={searchHandle}>Search</button> 
     <hr />
     {myans}
    </>
  )
}

export default Search
