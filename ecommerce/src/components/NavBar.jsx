import React from 'react'
import { IoIosCart } from "react-icons/io";

function NavBar() {
  return (
    <div className='w-full h-20 bg-slate-400 flex justify-between items-center px-12'>
        <div className=' font-bold text-3xl '>
            Logo
        </div>
        <div>
            <ul className=' flex justify-center items-center gap-6  text-lg'>
                <li className=' cursor-pointer text-xl font-medium font-serif active:text-white'>Home</li>
                <li className=' cursor-pointer text-xl font-medium font-serif active:text-white'>Men</li>
                <li className=' cursor-pointer text-xl font-medium font-serif active:text-white'>Women</li>
            </ul>
        </div>
        <div className=' flex justify-center items-center gap-3  cursor-pointer text-xl font-medium font-serif'>
            <button className=' border-solid'>Login</button>
           <div>
           <IoIosCart className=' text-4xl cursor-pointer '/>
           <div className=' w-5 h-5 rounded-full bg-red-500 text-center absolute top-5 right-9'>
            <span className=' text-white text-sm relative bottom-2'>0</span>
           </div>
           </div>
        </div>
    </div>
  )
}

export default NavBar