import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Display from './components/Display'
import Insert from './components/Insert'
import Search from './components/Search'

const App = () => {
  return (
    <>
      <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/display' element={<Display />} />
        <Route path='/home' element={<Home />} />
        <Route path='/insert' element={<Insert />} />
        <Route path='/search' element={<Search />} />
      </Route>

      </Routes>
    </>
  )
}

export default App
