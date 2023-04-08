import React from 'react'
import Navbar from '../components/Dashboard'
import Footer from '../components/Footer'
import Body from '../components/Body'

export default function Home() {
  return (
    <div>
        <div><Navbar></Navbar></div>
        <div><Body></Body></div>
        <div><Footer></Footer></div>
    </div>
  )
}