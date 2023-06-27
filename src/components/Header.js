import React from 'react'
import '../style/Header.css'
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

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
      <div className='header'>
        <div className='logo'>logo</div>
        <div className='listitems'>
          <li className='headerOptions'><Link to='/'>Home</Link></li>
          <li className='headerOptions'><Link to='/'>Profile</Link></li>
          <li className='headerOptions'><Link to='/filecomplaint'>File a Complaint</Link></li>
          <li className='headerOptions'><Link to='/'>Complaint Status</Link></li>
          {/* <li><Link to='/contactinfo'>Contact Us</Link></li> */}
          {/* <li><Link to='/login' onClick={logout}>{status ? 'Sign out' : 'Login'}</Link></li> */}
        </div>
        <Link to='/login' onClick={logout}><Button className='log' variant='dark'>{status ? 'Log out' : 'Log in'}</Button></Link>
      </div>
    </>
  );
}