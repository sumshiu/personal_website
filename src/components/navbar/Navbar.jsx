import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/sun_icon.png";
import "./navbar.css";

// BEM -> Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="port__navbar">
      <div className="port__navbar-links">
        <div className="port__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="port__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#projects">Projects</a>
          </p>
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
        </div>
      </div>
      <div className="port__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="port__navbar-menu_container scale-up-center">
            <div className="port__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#projects">Projects</a>
              </p>
              <p>
                <a href="#about">About</a>
              </p>
              <p>
                <a href="#contact">Contact</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
