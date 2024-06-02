import React from 'react'

function Image() {
  return (
            <div className=' w-60 h-24  rounded-md mx-auto p-4'>
                <div className=' rounded-b-lg shadow-sm'>
                    <img src="https://images.pexels.com/photos/3026284/pexels-photo-3026284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
                </div>
                <h2 className=' font-sans text-2xl py-3'>ProductName1</h2>
                <div className=''>
                    <button>Add to cart</button>
                    <button>Buy now</button>
                </div>
            </div>
  )
}

export default Image