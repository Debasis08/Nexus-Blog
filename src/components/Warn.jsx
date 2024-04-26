import React from 'react'
import { Link } from 'react-router-dom'

function Warn() {
  return (
    <div className="card">
        <b><span className=' text-sm'>To Add post, You need to&nbsp;</span>
        <Link to="/login"><span className='underline text-lg hover:text-xl'>
        Login
        </span>
        </Link>
        </b>
    </div>
  )
}

export default Warn
