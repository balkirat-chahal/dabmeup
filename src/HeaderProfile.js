import React from 'react';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function HeaderProfile(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen)


  return (
    <div className='flex-col'>
    <>
      <button onClick={toggle} className='flex items-center justify-center mr-10'>
        <h2 className='text-gray dark:text-white'>{props.username}</h2>
        <Avatar src={props.avatar} className='ml-5'/>
      </button>

      {isOpen && <ul className='
      fixed
      flex
      flex-col
      bg-gray-50
      text-black
      dark:bg-gray-600
      dark:text-white
      md:w-2/12
      w-full
      z-50
      mt-5
      border-gray-100
      dark:border-gray-50
      rounded-lg
      md:right-2
      right-0
      h-auto
      justify-center
      items-center
      '>
        <li className='m-1 p-1 text-xl'><Link to='/profile'>Profile</Link></li>
        <li className='m-1 p-1 text-xl'><Link to='/settings'>Settings</Link></li>
        <li className='m-1 p-1 text-xl'><button>Sign Out</button></li>

        </ul>}
    </>
    
    </div>
  )
}

export default HeaderProfile
