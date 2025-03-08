import React from 'react'

export default function Spinner() {
  return (
    <div className='min-h-screen  w-full flex justify-center items-center bg-white/10 backdrop-blur-md absolute top-0 bottom-0 left-0 z-50'>
      <div className="relative w-12 h-12 rounded-full animate-spin">
        <div className="absolute top-0 left-0 w-full h-full border-t-4 border-blue-500 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-r-4 border-green-500 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-b-4 border-yellow-500 rounded-full"></div>
      </div>
    </div>
  )
}
