import React from 'react'
import '../style/Header.css'
import {NavLink} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom'

export default function Header() {
  const logged = localStorage.getItem("usertype");
  const status = logged === "user" || logged === "officer";

  function logout(){
    localStorage.removeItem("authToken")
    localStorage.removeItem("usertype")
    localStorage.removeItem("data")
    localStorage.removeItem("cdata")
    localStorage.removeItem("complaintstatus")
  }


  
  return (
    <>
      <div className='header'>
        <div className='logo'>logo</div>
        <div className='listitems'>
          <li className='header_options'><NavLink  to='/'>Home</NavLink></li>
          {status && <li className='header_options'><NavLink  to='/profile'>Profile</NavLink></li>}
          <li className='header_options'><NavLink  to='/filecomplaint'>File a Complaint</NavLink></li>
          <li className='header_options'><NavLink  to='/complaintstatus'>Complaint Status</NavLink></li>
          {/* <li><Link to='/contactinfo'>Contact Us</Link></li> */}
          {/* <li><Link to='/login' onClick={logout}>{status ? 'Sign out' : 'Login'}</Link></li> */}
        </div>
        <Link to='/login' onClick={logout}><Button className='log' variant='dark'>{status ?'Log out' : 'Log in'}</Button></Link>
      </div>
    </>
  );
}