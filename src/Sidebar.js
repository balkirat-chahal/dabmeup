import React from 'react';
import SidebarComponent from './SidebarComponent';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import MapIcon from '@mui/icons-material/Map';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';

function Sidebar() {
  return (
    <div className='
    flex
    flex-row
    md:flex-col
    md:basis-2/12
    order-last
    md:order-first
    bg-white
    dark:bg-gray-800
    text-gray
    dark:text-white
    justify-center
    md:rounded-r-lg
    md:mr-2
    md:mt-4
    md:justify-start
    fixed
    bottom-0
    w-full
    md:left-0
    md:w-2/12
    md:top-20
    z-8
    '>
      <SidebarComponent Icon={HomeIcon} title='Home' page='/'/>
      <SidebarComponent Icon={ChatIcon} title='Messages' page='/messages'/>
      <SidebarComponent Icon={MapIcon} title='Map' page='/map'/>
      <SidebarComponent Icon={GroupIcon} title='Friends' page='/friends'/>
      <SidebarComponent Icon={AddIcon} title='Post' page='/post'/>
      {/**
       * md:fixed
    md:left-0
    md:w-2/12
    md:min-h-screen
    z-9
       */}
    </div>
  )
}

export default Sidebar
