import React from 'react';
import logoTextImg from './assets/text_bg_transparent.png';
import HeaderProfile from './HeaderProfile';

function Header(props) {
  return (
    <div className='flex items-center justify-between min-w-full bg-white dark:bg-gray-800 sm:sticky top-0 z-10'>

      <div className='m-5'>
        <img src={logoTextImg} alt='Logo' className='min-h5 max-h-10'/>
      </div>

      <HeaderProfile username='User' avatar=''/>

    </div>
  )
}

export default Header
