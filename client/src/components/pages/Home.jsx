import React from 'react'
import "./style.css"
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div className='homebg h-screen relative'>
      <Navbar/>
      <div className=''>
        <div className='bg1 h-[350px] w-3/4 absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
            <div className='bg2 h-[355px] w-full absolute top-[45%] left-[48%] transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-end pb-20'>
                    <div className='absolute top-[10%] left-[15%]'>
                        <h1 className='font-pricedown text-white font-bold text-7xl'>GAME</h1>
                        <h1 className='font-pricedown text-white font-bold text-7xl'>Codex <span className='text-xl'>1.0</span></h1>
                    </div>
                    <div className='absolute top-[50%] -translate-y-1/2 right-[15%]'>
                        <p className='text-[#EC576D] font-bold text-4xl'>Dev Hackathon</p>
                        <p className='text-[#EC576D] font-bold text-4xl'>By</p>
                        <p className='text-[#EC576D] font-bold text-4xl'>GDSC, LNMIIT</p>
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
