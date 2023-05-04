import React, { useEffect } from "react";
import "../style/Header.css";
import throttle from "lodash/throttle";

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
              <li className="navigation__item">
                <a href="#" className="navigation__link navigation__link--is-active">Logo</a>
              </li>
              <li className="navigation__item">
                <h1>CaseLink</h1>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">Work</a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">Signup</a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">Login</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
