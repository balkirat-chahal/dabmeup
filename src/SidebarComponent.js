import React from 'react';
import './SidebarComponent.css';

function SidebarComponent({Icon, title}) {
  return (
    <button className='
    flex
    m-2
    p-2
    items-center
    rounded-lg
    bg-white
    dark:bg-gray-800
    hover:bg-gray-50
    dark:hover:bg-gray-700
    '>
      <Icon className='sidebarIcon text-gray dark:text-gray-100 ml-1 mr-1' />
      <p className='text-gray dark:text-gray-100 text-2xl hidden sm:block'>{title}</p>
    </button>
  )
}

export default SidebarComponent
