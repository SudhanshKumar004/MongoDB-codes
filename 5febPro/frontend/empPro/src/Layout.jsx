import React from 'react'
import TopNav from './components/TopNav'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'



const Layout = () => {
  return (
    <>
    <TopNav />
      <hr />
      <div>
        <Outlet />
      </div>
    <hr />
      <Footer />
    </>
  )
}

export default Layout
