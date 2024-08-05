import React from 'react'
import Nearby from './Nearby'


function RightSection(props) {
  return (
    <div className='
    hidden
    md:block
    md:basis-2/12
    mt-20
    '>
      <div className=''>
        <div className='mb-5 text-center'>
        <h1 className='text-gray-300'>Nearby Users</h1>
        </div>
        </div>
        <Nearby/>
        <Nearby/>
        <Nearby/>
        <Nearby/>
        

    </div>
  )
}

export default RightSection
