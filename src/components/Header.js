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

  const refreshofficer = async()=> {
    try {
      const ref = await fetch('http://localhost:5000/refreshofficer',{
        method:"POST",
        headers:{
          "Content-Type" : "application/json",
          accept : "application/json"
        },
        body:JSON.stringify({pen:pen})
      })

      const res = await ref.json()
      const data = res.data
      localStorage.setItem("data",data)
      console.log("Data refreshed succesfully");
      navigate("/profile")
    }
    catch (error) {
      console.error(error);
    }
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
          {!officer && <li className='header_options'><NavLink  to='/searchcomplaint'>Complaint Status</NavLink></li>}
          {status && <li className='header_options'><NavLink  to='/profile'>Profile</NavLink></li>}
          {/* <li><Link to='/contactinfo'>Contact Us</Link></li> */}
          {/* <li><Link to='/login' onClick={logout}>{status ? 'Sign out' : 'Login'}</Link></li> */}
        </div>
        {officer && <li className='header_options listitems'><Button onClick={refreshofficer}>Refresh</Button></li>}
        <Link to='/login' onClick={logout}><Button className='log' variant='dark'>{status ?'Log out' : 'Log in'}</Button></Link>
      </div>
    </>
  );
}