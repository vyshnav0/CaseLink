import React from 'react'
import Footer from '../components/Footer';
import LoginBody from '../components/LoginBody'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
        <Link to='/'>Home</Link>
        <LoginBody></LoginBody>
        <Footer></Footer>
    </div>
  )
}
