import React from 'react'
import Image from './Image'

const img1 = "https://images.pexels.com/photos/3026284/pexels-photo-3026284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const img2 = "https://images.pexels.com/photos/879181/pexels-photo-879181.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const img3 = "https://images.pexels.com/photos/1850725/pexels-photo-1850725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const img4 = "https://images.pexels.com/photos/1936800/pexels-photo-1936800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const names = ["Hinna Mortell", "linga Ponda", "Mistyu Named", "Criss Morphat"];

function ImageContainer() {
  return (
    <div className=" w-full h-fit bg-gray-700 flex items-start justify-start">

        <div className=' max-w-5xl h-fit bg-slate-400 rounded-lg shadow-2xl flex flex-wrap flex-3 justify-start p-8'>
          <Image/>
          <Image/>
          <Image/>
          
        </div>
        
    </div>
  )
}

export default ImageContainer