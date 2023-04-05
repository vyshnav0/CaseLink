import React from 'react'
import '../style/Navbar.css'

export default function Navbar() {
  return (
    <div className='wholeNavbar'>
      <span className='titleofnav'><b>Home</b></span>
      <span className='boxOfNavbarRight'>
        <span className='comps'>Links</span>
        <span className='comps'>Login</span>
        <span className='comps'>Profile</span>
        <span className='comps'>Help</span>
      </span>
    </div>
  )
}