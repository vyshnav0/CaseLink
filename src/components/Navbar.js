import React from 'react'
import '../style/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='wholeNavbar'>
      <span className='titleofnav'><b>Home</b></span>
      <span className='boxOfNavbarRight'>
        <Link className='comps' id = 'log' to = '/'>Links</Link>
        <Link className='comps' to = '/login'>Login</Link>
        <Link className='comps' to = '/'>Profile</Link>
        <Link className='comps' to = '/'>Help</Link>
      </span>
    </div>
  )
}