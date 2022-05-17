import React from 'react'

export default function ActionLoader() {
  return (
    <div className=" flex justify-center item-center align-center w-full h-40">
      <div className=" bg-red my-9 animate-spin spinner-load ">
        <svg fill="#3F6078" color='#eee' className='path-color'viewBox="0 0 100 100">
          <circle fill='red' cx="50" cy="50" r="50" />
          <path fill='#f3f3f3' d="M50,0c13.26,0,25.98,5.27,35.36,14.64S100,36.74,100,50" />
        </svg>
      </div>
    </div>
  )
}