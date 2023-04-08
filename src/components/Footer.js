import React from 'react'
import '../style/Footer.css'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div id = 'wholeOfFooter'>
        <span id = "contactUs">Contact Us?</span>
        <Link id='contactus' to='/contactinfo'>Click here</Link>
    </div>
  )
}