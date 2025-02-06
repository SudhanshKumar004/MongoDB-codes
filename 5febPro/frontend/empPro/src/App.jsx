import React from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Display from './pages/Display'
import Insert from './pages/INsert'
import Update from './pages/Update'
import Search from './pages/Search'
import EmpEdit from './pages/empEdit'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
          
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='insert' element={<Insert />} />
          <Route path='display'element={<Display />} />
          <Route path='search'element={<Search />} />
          <Route path='update'element={<Update />} />
          <Route path='empedit/:id'element={<EmpEdit />} />
          
          </Route>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
