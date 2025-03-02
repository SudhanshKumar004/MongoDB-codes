import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <>
      <BrowserRouter>
      
      <Routes>

        <Route path='/' element={<Layout/> }>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='registration' element={<Registration />} />

        </Route>
      </Routes>

      <Routes>

        <Route path='dashboard' element={<Dashboard />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
