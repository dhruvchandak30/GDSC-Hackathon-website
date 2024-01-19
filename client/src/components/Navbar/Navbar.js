import React, { useState } from 'react'
import logo from "../../assets/logo.svg"
import './navbar.css'

const Navbar = () => {

  const [bg,setBg]=useState([false,false,false,false])


  return (
    <div>
      <div className='flex items-center justify-normal'>
        <div>
            <img src={logo} alt="" width="100%" height="100%"/>
        </div>
        <div className='flex gap-x-6'>
          <div className={`text-center w-[100.5px] h-[30px] m-5 ${bg[0]?"back":""}`}>
            <h5  className='text-[#FFFFFF] heading cursor-pointer' >Home</h5>
          </div>
          <div className={`text-center w-[100.5px] h-[30px] m-5 ${bg[1]?"back":""}`}>
            <h5  className='text-[#FFFFFF] heading cursor-pointer' >About Us</h5>
          </div>
          <div className={`text-center w-[100.5px] h-[30px] m-5 ${bg[2]?"back":""}`}>
            <h5  className='text-[#FFFFFF] heading cursor-pointer' >Timeline</h5>
          </div>
          <div className={`text-center w-[100.5px] h-[30px] m-5 ${bg[3]?"back":""}`}>
            <h5 className='text-[#FFFFFF] heading cursor-pointer' >Problem Statements</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar