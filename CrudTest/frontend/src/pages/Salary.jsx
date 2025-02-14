import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Salary = () => {
    const[mydata , setMydata] = useState([])

    const loadData = () =>{
    const api = ("http://localhost:8000/employee/datadisplay")
    axios.get(api).then((res)=>{
      console.log(res.data);
      
      setMydata(res.data)
    })
  }
useEffect(()=>{
    loadData()
},[])




  const totalSalary = mydata.reduce((all, emp) => all + emp.salary, 0);
  return (
    <>
      <h1 align="center"> Total Salary</h1>

   Total Salary = {totalSalary} 
    </>
  )
}

export default Salary
