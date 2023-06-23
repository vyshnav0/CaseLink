import React from 'react'
import '../style/Header.css'
import {Link} from 'react-router-dom'

export default function Header() {

  function logout(){
    localStorage.removeItem("authToken")
    localStorage.removeItem("usertype")
    localStorage.removeItem("data")
  }
  
  return (
    <>
      <div className='wholeHeader'>
        <div className='listitems'>
          <li><Link to='/'>About Us</Link></li>
          <li><Link to='/contactinfo'>Contact Us</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/' onClick={logout}>Sign out</Link></li>
          <li><Link to='/filecomplaint'>File a complaint</Link></li>
        </div>
      </div>
    </>
  );
}