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
    sm:flex-col
    sm:basis-2/12
    order-last
    sm:order-first
    bg-white
    dark:bg-gray-800
    text-gray
    dark:text-white
    justify-center
    sm:rounded-r-lg
    sm:mr-2
    sm:mt-2
    fixed
    bottom-0
    w-full
    sm:static
    z-10
    '>
      <SidebarComponent Icon={HomeIcon} title='Home'/>
      <SidebarComponent Icon={ChatIcon} title='Messages'/>
      <SidebarComponent Icon={MapIcon} title='Map'/>
      <SidebarComponent Icon={GroupIcon} title='Friends'/>
      <SidebarComponent Icon={AddIcon} title='Post'/>
    </div>
  )
}

export default Sidebar
