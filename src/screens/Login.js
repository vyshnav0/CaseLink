import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import LoginBody from '../components/LoginBody'

export default function Login() {
  return (
    <div>
        <Navbar loggedIn={true}></Navbar>
        <LoginBody></LoginBody>
        <Footer></Footer>
    </div>
  )
}
