import React from 'react'
import Navbar from '../components/Dashboard'
import SignOutBody from '../components/SignOutBody'
import Footer from '../components/Footer'

export default function SignOut() {
  return (
    <div>
        <Navbar></Navbar>
        <SignOutBody></SignOutBody>
        <Footer></Footer>
    </div>
  )
}
