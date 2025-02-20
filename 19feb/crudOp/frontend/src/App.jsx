import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Update from './pages/Update'
import Search from './pages/Search'
import Display from './pages/Display'
import Insert from './pages/Insert'
import Editdata from './pages/Editdata'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='home' element={<Home />}/>
          <Route path='insert' element={<Insert />}/>
          <Route path='display' element={<Display />}/>
          <Route path='search' element={<Search />}/>
          <Route path='update' element={<Update />}/>
          <Route path='update' element={<Editdata />}/>
        </Route>


      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
