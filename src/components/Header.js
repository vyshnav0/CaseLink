import React from 'react'
import '../style/Header.css'
import {NavLink} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import {Link , useNavigate} from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  const logged = localStorage.getItem("usertype");
  const status = logged === "user" || logged === "officer";
  let [officer,pen] = [false,null]
  officer = logged === "officer"
  if(officer){
    pen = JSON.parse(localStorage.getItem("data")).pen
  }

  function logout(){
    localStorage.removeItem("authToken")
    localStorage.removeItem("usertype")
    localStorage.removeItem("data")
    localStorage.removeItem("cdata")
    localStorage.removeItem("complaintstatus")
    localStorage.removeItem("crimedata")
  }

  return (
    <>
      <div className='header'>
        <div className='logo'><NavLink to = '/'>
          <img src = "./images/sitelogo.png" alt = "hope you dont see this" />
          </NavLink></div>
        <div className='listitems'>
          <li className='header_options'><NavLink  to='/'>Home</NavLink></li>
          {officer && <li className='header_options'><NavLink  to='/officer'>Dashboard</NavLink></li>}
          <li className='header_options'><NavLink  to='/filecomplaint'>File a Complaint</NavLink></li>
          {officer && <li className='header_options'><NavLink  to='/complaintstatus'>Complaints</NavLink></li>}
          {officer && <li className='header_options'><NavLink  to='/crimestatus'>Crime</NavLink></li>}
          {!officer && <li className='header_options'><NavLink  to='/searchcomplaint'>Complaint Status</NavLink></li>}
          {status && <li className='header_options'><NavLink  to='/profile'>Profile</NavLink></li>}
          {/* <li><Link to='/contactinfo'>Contact Us</Link></li> */}
          {/* <li><Link to='/login' onClick={logout}>{status ? 'Sign out' : 'Login'}</Link></li> */}
        </div>
        <Link to='/login' onClick={logout}><Button className='log' variant='dark'>{status ?'Log out' : 'Log in'}</Button></Link>
      </div>
    </>
  );
}