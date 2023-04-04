import React from 'react'

function Spinner() {
  return (
    <div className='flex  h-[calc(100vh-68px)] justify-center items-center'>
        <p className='text-7xl font-thin'>L</p>
        <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-blue-400'></div>
        <p className='text-7xl font-thin'>ading....</p>
    </div>
  )
}

export default Spinner