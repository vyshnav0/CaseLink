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
          <li><Link to='/'>SiteLogo</Link></li>
          <img src={"."} width="10" height="5" alt='mkd'/>
          <li><Link to='/filecomplaint'>Register Complaint</Link></li>
          <li><Link to='/#'>Complaint Status</Link></li>
          <li><Link to='/contactinfo'>Contact Us</Link></li>
          <li><Link to='/#'>ProfileIcon</Link></li>


          {/* <li><Link to='/login' onClick={logout}>{status ? 'Sign out' : 'Login'}</Link></li> */}
        </div>
      </div>
    </>
  );
}