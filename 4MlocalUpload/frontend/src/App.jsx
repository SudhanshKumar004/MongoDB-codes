import React from 'react'
import {BrowserRouter , Route ,Routes} from "react-router-dom"
import Layout from './Layout'
import Home from './pages/Home'
import Display from './pages/Display'
import Insert from './pages/Insert'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />} >
        <Route path='home' element={<Home />} />
        <Route path='insert' element={<Insert />} />
        <Route path='display' element={<Display />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
