import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <nav style={{display:"flex" , gap:"20px"}}>
      <h1><Link to={'home'}>Home</Link></h1>
      <h1><Link to={'display'}>Display</Link></h1>
      <h1><Link to={'insert'}>insert</Link></h1>
      <h1><Link to={'search'}>Search</Link></h1>
    </nav>
      <hr />

      <Outlet />
    </>
  )
}

export default Layout
