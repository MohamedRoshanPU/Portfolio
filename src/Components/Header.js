import React, { useState } from "react";
import "../Styles/Header.scss";
import menu from "../Images/menu.svg";
import close from "../Images/close.svg";
import { Link } from "react-router-dom";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="Header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>
              <span>R</span>N
            </h1>
          </Link>
        </div>
        <div className={isActive ? "links active" : "links"}>
          <Link to="about" onClick={()=>{setIsActive(false)}}>
            <li>About Me</li>
          </Link>
          <Link to="works" onClick={()=>{setIsActive(false)}}>
            <li>My Works</li>
          </Link>

          <a href="tel:+919605373040">
            <button className="btn">Hire Me</button>
          </a>
        </div>
        <div className="menu">
          <img
            src={isActive ? close : menu}
            alt="toggle"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
