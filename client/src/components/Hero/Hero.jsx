import React from 'react'
import Navbar from '../Navbar/Navbar'
import heading from "../../assets/heading.svg"
import title from "../../assets/homeLine.svg"
import "./style.css"

const Hero = () => {
  return (
    <div className='homebg h-screen '>
      <Navbar/>
      <div className='relative h-[85%]'>
        <div className='bg1 h-[350px] w-3/4 absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
            <div className='bg2 h-[355px] w-full absolute top-[45%] left-[48%] transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-end pb-20'>
                    <div className='absolute top-[10%] left-[15%]'>
                        {/* <h1 className='font-pricedown text-white font-bold text-7xl'>GAME</h1>
                        <h1 className='font-pricedown text-white font-bold text-7xl'>Codex <span className='text-xl'>1.0</span></h1> */}
                        <img src={heading} alt="" />
                    </div>
                    <div className='absolute top-[50%] -translate-y-1/2 right-[10%]'>
                        {/* <p className='text-[#EC576D] font-bold text-4xl'>Dev Hackathon</p>
                        <p className='text-[#EC576D] font-bold text-4xl'>By</p>
                        <p className='text-[#EC576D] font-bold text-4xl'>GDSC, LNMIIT</p> */}
                        <img src={title} alt="" />
                    </div>
            </div>
        </div>
      </div>
      <div className='bg-black w-20 h-10 text-white border-5 border-white'>
                            hello
      </div>
    </div>
  )
}

export default Hero
