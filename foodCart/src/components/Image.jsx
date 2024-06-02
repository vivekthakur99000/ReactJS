import React from 'react'

function Image({href, name}) {
  return (
    <div className=' w-60 h-2/5 shadow-2xl p-8 rounded-3xl'>
        <img src={href} alt="" srcset="" className=' w-full h-2/5 mb-5 rounded-md' />
        <p className=' mb-2'>{name}</p>
        <div>
        <button
      type="button"
      onClick= {handleSubmit}
      className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Add to Cart
    </button>
        </div>
    </div>
  )
}

export default Image