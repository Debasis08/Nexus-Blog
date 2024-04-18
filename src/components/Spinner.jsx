import React, { Component } from 'react'
import loader from "./loader.gif"

function Spinner() {
  return (
    <div className='flex justify-center text-center w-screen'>
      <img src={loader} alt='loading...' />
    </div>
  )
}

export default Spinner
