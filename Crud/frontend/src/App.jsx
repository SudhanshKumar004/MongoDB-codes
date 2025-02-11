import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Display from './pages/Display'
import Insert from './pages/Insert'
import Search from './pages/Search'
import Update from './pages/Update'
import EditData from './pages/EditData'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/display' element={<Display />} />
      <Route path='/update' element={<Update />} />
      <Route path='/insert' element={<Insert />} />
      <Route path='/search' element={<Search />} />
      <Route path='/editdata/:id' element={<EditData />} />
      
      </Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
