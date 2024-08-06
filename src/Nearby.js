import React from 'react'
import { Avatar } from '@mui/material'

function Nearby(props) {
  return (
    <div className='flex items-center mb-3 justify-around'>
    <div className='flex items-center'>
      <Avatar className='mr-2' src={props.avatar}/>
      <p className='text-white'>Random</p>
      </div>
      <button className='flex rounded-sm m-1'>
        <p className='text-xl text-yellow-300'>Dab</p>
        <p className='text-xl text-blue-300'>Up</p>
      </button>

    </div>
  )
}

export default Nearby