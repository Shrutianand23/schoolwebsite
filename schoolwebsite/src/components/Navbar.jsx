import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='flex flex-row justify-between bg-slate-700 p-5'>
        <div className=' flex-row flex item items-center'>
            <img className='h-14 w-14 rounded-full' src='../src\assets\Creative Logo Designs.jpg'></img>
            <p className=' text-white m-5'> SCHOOL WEBSITE</p>
        </div>
        <div className=' flex flex-row items-center text-white'>
       <Link to={"/"}>  
        <p>Home</p>
        </Link>
       <Link to={"/about"}>
        <p className=' m-5'>About</p>
        </Link>
        <Link to={"/contact"}>
            <p className=' '>Contact</p>
        </Link>
        <Link to={"/login"}>
            <p className=' m-5'><button className=' rounded-md bg-emerald-700 hover:bg-emerald-800 h-10 w-20'>Login</button></p>
        </Link>
        
        </div>

    </nav>
  
  )
}
