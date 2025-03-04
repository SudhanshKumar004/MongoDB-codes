import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
      <div className="nav" style={{display:"flex", gap:"20px", backgroundColor:"darkslategrey"}}>
        <h1><Link to={'home'} style={{color:"white" , textDecoration:"none"}}>Home</Link></h1>
        <h1><Link to={'insert'} style={{color:"white" , textDecoration:"none"}}>Insert</Link></h1>
        <h1><Link to={'display'} style={{color:"white" , textDecoration:"none"}}>Display</Link></h1>
      </div>
      <hr />
      <Outlet />
    </>
  )
}

export default Layout
