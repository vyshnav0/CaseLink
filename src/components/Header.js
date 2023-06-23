import React, { useEffect } from 'react'
import '../style/Header.css'
import throttle from 'lodash/throttle';
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <>
      <div className='wholeHeader'>
        <div className='listitems'>
          <li><Link to='/'>About Us</Link></li>
          <li><Link to='/contactinfo'>Contact Us</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/filecomplaint'>File a complaint</Link></li>
        </div>
      </div>
    </>
  );
}