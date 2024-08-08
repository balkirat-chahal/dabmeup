import React from 'react';
import RightSection from './RightSection';
import FeedComponent from './FeedComponent';


function Feed() {
  return (
    <>
    <div className='
    min-h-0.5
    w-full
    md:w-8/12
    min-h-200
    z-9
    mt-24
    z-9
    overflow-y-auto
    ml-auto
    mr-auto
    justify-center
    '>
      <FeedComponent/>
      <FeedComponent />
    </div>
    <RightSection username="User" avatar="" />
    </>
  )
}

export default Feed
