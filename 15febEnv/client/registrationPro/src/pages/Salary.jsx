import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Salary = () => {
  const [mydata,setMydata] = useState([])


  const loadData=async()=>{
    

    try {
      let api = "http://localhost:8080/employee/displaydata"
    let res = await axios.get(api);
    setMydata(res.data);
    } catch (error) {
     alert("Error Loading Data") 
    }
  }

  const total = mydata.reduce((sum, employee) => sum + employee.salary, 0)

  useEffect(()=>{
    loadData()
  },[])
  return (
    <>
      <h1>Total Salary = {total}</h1>
    </>
  )
}

export default Salary
