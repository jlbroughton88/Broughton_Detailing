import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "../Logos/MenuSVG";
import "./Navbar.scss";

const Navbar = () => {

  const handleMenuOpen = e => {
    let dropdown = document.getElementById("dropDown");
    let overlay = document.getElementById("overlay")
    if(dropdown.classList.contains("active")) {
      dropdown.classList.remove("active");
     
    } else {
      dropdown.classList.add("active"); 
      overlay.classList.add("active");
    }
  }

  useEffect(() => {
    let dropdown = document.getElementById("dropDown");
    let overlay = document.getElementById("overlay");
    dropdown.classList.remove("active");
    overlay.classList.remove("active");
  })

  const overlayClose = e => {
    let dropdown = document.getElementById("dropDown");
    if(e.target.classList.contains("active")) {
      e.target.classList.remove("active");
      dropdown.classList.remove("active");
    }
  }

  return (
    <div className="navMother">
      <div className="navMain">
      <div onClick={overlayClose} className="" id="overlay"></div>
        <Link to="/">
          <div className="navLogoDiv">
            <h2 className="navLogo">Broughton</h2>
            <h2 className="navLogoSecond">Detailing</h2>
          </div>
        </Link>

        <div tabIndex="0" className="navLinksDiv">
          <Link className="navLink" to="/about">
            About
          </Link>
          <Link className="navLink" to="/services">
            Services
          </Link>
          <Link className="navLink" to="/work">
            Work
          </Link>
          <Link className="navLink" to="/contact">
            Contact
          </Link>
        </div>
        <div tabIndex="0" onClick={handleMenuOpen} className="burgerMenuDiv">
          {/* <button >Menu</button> */}
          <Menu className="burgerMenu"/>
        </div>
        <div tabIndex="0" id="dropDown" className="navDropDown">
          <ul >
            <Link  to="/about">
              <li  >About</li>
            </Link>
            <Link to="/services">
              <li>Services</li>
            </Link>
            <Link to="/work">
              <li>Work</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
