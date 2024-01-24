
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import RegistrationForm from './pages/Registration'
import LoginPage from './pages/Log'
import Dashboard from './pages/Dashboard'
import { useEffect, useState } from 'react'
import ContactForm from './pages/Contact'
import Footer from './components/Footer'



function App() {
  const [loggedIn,setisLoggedin]=useState(false)
  useEffect(()=>{
    const token = localStorage.getItem("userToken")
    if(token){
      setisLoggedin(true)
    }
  },[])
  return (
    <>
    
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<ContactForm/>}/>   
      <Route path='/login' element={<Login/>}/>    
      <Route path='/registration' element={<RegistrationForm/>}/>
      <Route path='/log' element={<LoginPage/>}/>
     { loggedIn && <Route path='/dashboard'element={<Dashboard/>}/>}

      </Routes>
    <Footer/>
     
    </>
  )
}

export default App
