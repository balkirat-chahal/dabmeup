import React from 'react';
import logoTextImg from './assets/text_bg_transparent.png';
import Avatar from '@mui/material/Avatar';

function Header(props) {
  return (
    <div className='flex items-center justify-between min-w-full bg-white dark:bg-gray-800 sm:sticky z-10'>

      <div className='m-5'>
        <img src={logoTextImg} alt='Logo' className='min-h5 max-h-10'/>
      </div>

      <button className='flex items-center justify-center mr-10'>
        <h2 className='text-gray dark:text-white'>{props.username}</h2>
        <Avatar src={props.avatar} className='ml-5'/>
      </button>

    </div>
  )
}

export default Header
