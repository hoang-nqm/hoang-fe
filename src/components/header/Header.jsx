import React from "react";
import "./Header.css";

function Header() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="/" className="nav__link">
            Login
          </a>
        </li>
        <li className="nav__item">
          <a href="/editpage" className="nav__link">
            Edit page
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
