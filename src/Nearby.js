import React from 'react'
import { Avatar } from '@mui/material'

function Nearby(props) {
  return (
    <div className='flex items-center mb-3 justify-around '>
    <div className='flex items-center'>
      <Avatar className='mr-2' src={props.avatar}/>
      <p className='text-white'>Random</p>
      </div>
      <p className='text-yellow-300'>Follow</p>

    </div>
  )
}

export default Nearby