import React from 'react';
import './SidebarComponent.css';
import { Link } from 'react-router-dom';

function SidebarComponent({Icon, title, page}) {
  return (
    <Link className='
    flex
    m-2
    p-2
    items-center
    rounded-lg
    bg-white
    dark:bg-gray-800
    hover:bg-gray-50
    dark:hover:bg-gray-700
    overflow-hidden
    '
    to={page}>
      <Icon className='sidebarIcon text-gray dark:text-gray-100 ml-1 mr-1' />
      <p className='text-gray dark:text-gray-100 text-2xl hidden md:block'>{title}</p>
    </Link>
  )
}

export default SidebarComponent
