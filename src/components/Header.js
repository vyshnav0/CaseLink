import React from 'react'
import '../style/Header.css'
import {Link} from 'react-router-dom'

export default function Header() {
  const logged = localStorage.getItem("usertype");
  const status = logged === "user" || logged === "officer";

  function logout(){
    localStorage.removeItem("authToken")
    localStorage.removeItem("usertype")
    localStorage.removeItem("data")
  }
  
  return (
    <>
      <div className='wholeHeader'>
        <div className='listitems'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/contactinfo'>Contact Us</Link></li>
          <li><Link to='/login' onClick={logout}>{status ? 'Sign out' : 'Login'}</Link></li>
          <li><Link to='/filecomplaint'>File a complaint</Link></li>
        </div>
      </div>
    </>
  );
}