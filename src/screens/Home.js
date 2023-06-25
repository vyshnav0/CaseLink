import React from 'react'
import Footer from '../components/Footer'
import Body from '../components/Body'
import Header from '../components/Header'
import Missing from '../components/Missing'
import Wanted from '../components/Wanted'


export default function Home() {
  return (
    <div>
        <div><Header></Header></div>
        <div><Body></Body></div>
        <h2>MISSING PERSONS:</h2>      {/* STYLE THIS SHIT PLZ */}
        <div><Missing></Missing></div>
        <h2>MOST WANTED:</h2>      {/* THIS TOO */}
        <div><Wanted></Wanted></div>
        <div><Footer></Footer></div>
    </div>
  )
}