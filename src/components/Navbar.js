import React from 'react'
import '../style/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div className='wholeNavbar'>
      <Link className='titleofnav' to = '/'><b>Home</b></Link>
      <span className='boxOfNavbarRight'>
        <Link className='comps' id='log' to='/'>{props.loggedIn ? 'Profile' : 'Links'}</Link>
        {props.loggedIn ? <Link className='comps' to ='/signout'>Logout</Link> : <Link className='comps' to ='/login'>Login</Link>}
        {/* Currently clicking login changes "login from navbar to logout. In the future this should take us to 
        login page where after we enter details and click login, then only the navbar should change to logout. 
        And add functionality to logout instead of just changing page." */}
      </span>
    </div>
  )
}
