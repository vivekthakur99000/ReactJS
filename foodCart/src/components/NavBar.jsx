import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";


const menuItems = [
    {
        name: "Home",
        href : "#"
    },
    {
        name: "about",
        href : "#"
    },
    {
        name: "contact",
        href : "#"
    },
]

function NavBar() {
        const[count, setCount] = useState(0);

  return (
    <div className=' w-full h-24 bg-slate-800 text-white px-20 flex justify-between items-center'>
       <ul className=' flex justify-center items-center gap-10'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
       </ul>

        <div>
        <FaShoppingCart className=' text-3xl'/>
        <span className=' absolute top-6 right-14 bg-red-600 w-6 h-6 rounded-full text-center'>{count}</span>
        </div>

    </div>
  )
}

export default NavBar