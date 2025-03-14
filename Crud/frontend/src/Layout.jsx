import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
        <div className="wrap">
            <Outlet />
        </div>
      <hr />
      <Footer />
    </>
  )
}

export default Layout
