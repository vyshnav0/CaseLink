import React, { useEffect } from 'react'
import '../style/Header.css'
import throttle from 'lodash/throttle';

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
    return() => {
      window.removeEventListener("scroll", throttle(onScroll, 300));
    };
  },[]);
  return (
    <div>
      <header className="header sticky sticky--top js-header">

<div className="grid">

  <nav className="navigation">
    <ul className="navigation__list navigation__list--inline">
      <li className="navigation__item"><a href="#" className="navigation__link navigation__link--is-active">Home</a></li>
      <li className="navigation__item"><a href="#" className="navigation__link">About Us</a></li>
      <li className="navigation__item"><a href="#" className="navigation__link">Work</a></li>
      <li className="navigation__item"><a href="#" className="navigation__link">Clients</a></li>
      <li className="navigation__item"><a href="#" className="navigation__link">Contact</a></li>
    </ul>
  </nav>

</div>

</header>

<main className="main">
<div className="grid">
  <h1>Change this .</h1>
  <p>Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! </p>
  <p>Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! </p>
  <p>Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! </p>
  <p>Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! Death yeah, Murder yeah! </p>

</div>
</main>
    </div>
        )
}
