import React, { useEffect } from 'react'
import '../style/Header.css'
import throttle from 'lodash/throttle';
import {Link} from 'react-router-dom'

export default function Header() {
  useEffect(() => {
    const $$header = document.querySelector(".js-header");

    function onScroll() {
      if (window.pageYOffset) {
        $$header.classList.add("is-active");
      } else {
        $$header.classList.remove("is-active");
      }
    }
    window.addEventListener("scroll", throttle(onScroll, 300));
    return () => {
      window.removeEventListener("scroll", throttle(onScroll, 300));
    };
  }, []);

  return (
    <div>
      <header className="header sticky sticky--top js-header">

<div className="grid">

  <nav className="navigation">
    <ul className="navigation__list navigation__list--inline">
      <li className="navigation__item"><Link to="#" className="navigation__link navigation__link--is-active">Logo</Link></li>
      {/* The above was made a logo so that clicking it will direct to homepage */}
    </ul>

    <div className='d-flex'>
    <Link to="/contactinfo" className="btn text-success navigation__link">About Us</Link>
      <Link to="#" className="navigation__link">Sign In</Link>
    </div>


  </nav>

</div>

</header>

    </div>
  );
}
