import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LoginBody from '../components/LoginBody'

export default function Login() {
  return (
    <div>
        <div><Header></Header></div>
        <LoginBody></LoginBody>
        <Footer></Footer>
    </div>
  )
}
