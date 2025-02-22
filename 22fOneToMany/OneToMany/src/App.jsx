import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Insert from './pages/Insert'
import AddBook from './pages/AddBook'
import Display from './pages/Display'
import AddNewBook from './pages/AddNewBook'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='insert' element={<Insert />} />
        <Route path='addbook' element={<AddBook />} />
        <Route path='display' element={<Display />} />
        <Route path='addnewbook/:id' element={<AddNewBook />} />

        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
