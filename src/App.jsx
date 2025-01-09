import React, {useRef} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Header from './static/Header'
import Project from './pages/Project'
import './App.css'
import ContactForm from './pages/ContactForm'
import StackGPT from './pages/StackGPT'
import AboutGPT from './pages/AboutGPT'
import Footer from './static/Footer'

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<AboutGPT />}/>
        <Route path='/stack' element={<StackGPT />}/>
        <Route path='/project' element={<Project />}/>
        <Route path='/contact' element={<ContactForm />}/>
      </Routes>
 
    </BrowserRouter>
    
    </>
  )
}

export default App