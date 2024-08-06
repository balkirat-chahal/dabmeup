import React from 'react';
import RightSection from './RightSection';

function Feed() {
  return (
    <>
    <div className='
    
    bg-red-500
    min-h-0.5
    w-full
    md:w-8/12
    min-h-200
    z-9
    mt-24
    hover:bg-green-500
    z-9
    overflow-y-auto
    ml-auto
    mr-auto
    '>
      <p>Feed hjjhjbbhjbjdbjhjbhdjbhdbhjdbjhdjbhjdbhjhb</p>
      <button onClick={() => console.log("Clicked")}>Hello</button>
    </div>
    <RightSection username="User" avatar="" />
    </>
  )
}

export default Feed
