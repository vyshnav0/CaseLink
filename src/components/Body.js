import React from 'react'
import '../style/Body.css'

export default function Body() {
  return (
    <div className='wholeOfBody'>
      <div className='profile'>
        <div className='profileContents'>
          Profile
        </div>
      </div>
      <div className='mainContent'>
        <div className='contentsOfMain'>
          <div className='mainContents'>
            Main
          </div>
        </div>
      </div>
      <div className='sideNews'>
        <div className='sideContents'>
          Side
        </div>
      </div>
    </div>
  )
}