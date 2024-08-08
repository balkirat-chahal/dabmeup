import React from 'react';
import sampleImg from './assets/sampleImg.png';
import { Avatar } from '@mui/material';
import LikeIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';


function FeedComponent() {
  return (
    <div className='
    ml-2
    mr-2
    mb-4
    bg-white
    dark:bg-gray-800
    rounded-lg
    md:max-w-xl
    md:mr-auto
    md:ml-auto
    p-4
    '>
        <div className='flex items-center'>
            <Avatar className='m-2'/>
            <h2 className='text-black dark:text-white'>User</h2>
        </div>
      <img src={ sampleImg } className='
      max-w-sm
      sm:max-w-lg
      ml-auto
      mr-auto
      '/>

      <div className='p-4'>
        <button><LikeIcon className='m-2 mr-2 text-black dark:text-white lg'/></button>
        <button><CommentIcon className='m-2 mr-2 text-black dark:text-white lg'/></button>
        <button><SendIcon className='m-2 mr-2 text-black dark:text-white lg'/></button>
      </div>
    </div>
  )
}

export default FeedComponent
