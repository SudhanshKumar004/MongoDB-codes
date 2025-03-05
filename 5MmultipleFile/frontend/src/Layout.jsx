import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <div style={{display:"flex", gap:"20px"}}>
      <h1><Link to={"home"}>Home</Link></h1> 
      <h1><Link to={"insert"}>Insert</Link></h1> 
      <h1><Link to={"display"}>Display</Link></h1> 

    </div>
      
      <hr />

      <Outlet/>
    </>
  )
}

export default Layout
