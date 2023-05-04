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
      <li className="navigation__item"><Link to="/contactinfo" className="navigation__link">Contact</Link></li>
      <li className="navigation__item"><Link to="#" className="navigation__link navigation__link--is-active">Home</Link></li>
      <li className="navigation__item"><Link to="#" className="navigation__link">About Us</Link></li>
      <li className="navigation__item"><Link to="#" className="navigation__link">Work</Link></li>
      <li className="navigation__item"><Link to="#" className="navigation__link">Clients</Link></li>
    </ul>
  </nav>

</div>

</header>

    </div>
  );
}
