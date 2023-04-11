import React from 'react'
import Footer from '../components/Footer'
import Body from '../components/Body'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
        <div><Header></Header></div>
        <div><Body></Body></div>
        <div><Footer></Footer></div>
    </div>
  )
}