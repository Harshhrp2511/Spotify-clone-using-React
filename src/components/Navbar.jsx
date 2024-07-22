import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-full cursor-pointer' src={assets.arrow_left} alt="" />
            <img onClick={()=>navigate(1)} className='w-8 bg-black p-2 rounded-full cursor-pointer' src={assets.arrow_right} alt="" />
        </div>
        <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[15px] px-2 py-2 rounded-full hidden md:block cursor-pointer'>Explore Premium </p>
            <p className='bg-black py-2 px-3 rounded-full text-[15px] cursor-pointer'>Install App</p>
            <p className='bg-purple-500 text-black w-8 h-8 rounded-full flex items-center justify-center cursor-pointer'>H</p>
        </div>
    </div>
    <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black px-3 py-0.5 rounded-full cursor-pointer'>All</p>
        <p className='bg-black  px-3 py-0.5 rounded-full cursor-pointer'>Music</p>
        <p className='bg-black  px-3 py-0.5 rounded-full cursor-pointer'>Podcasts</p>
    </div>
    </>
  )
}

export default Navbar