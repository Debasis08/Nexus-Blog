import React, { Component } from 'react'
import loader from "./loader.gif"

function Spinner() {
  return (
    <div className='flex justify-center scale-80 text-center w-screen h-4/5'>
      <img src={loader} alt='loading...' />
    </div>
  )
}

export default Spinner
