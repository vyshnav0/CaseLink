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
          <li className='logo'><Link to="/"><img src='/images/siteLogo.jpg' width="100" height="80" alt='logo'/></Link></li>
          <li className='headerOptions'><Link to='/filecomplaint'>Register Complaint</Link></li>
          <li className='headerOptions'><Link to='/'>Complaint Status</Link></li>
          {/* <li><Link to='/contactinfo'>Contact Us</Link></li> */}
          <li className='headerOptions'><Link to='/'>ProfileIcon</Link></li>
          {/* <li><Link to='/login' onClick={logout}>{status ? 'Sign out' : 'Login'}</Link></li> */}
        </div>
      </div>
    </>
  );
}