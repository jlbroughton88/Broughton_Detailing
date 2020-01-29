import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navMother">
      <div className="navMain">
        <Link to="/">
          <div className="navLogoDiv">
            <h2 className="navLogo">Broughton</h2>
            <h2 className="navLogoSecond">Detailing</h2>
          </div>
        </Link>

        <div className="navLinksDiv">
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
      </div>
    </div>
  );
};

export default Navbar;
