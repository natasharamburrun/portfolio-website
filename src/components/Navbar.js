import React, { useState } from "react"
import {  Link } from "react-router-dom";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const openMenu = () => {
    setNavbarOpen(!navbarOpen);
  }
  return (
    <nav className="navigation">
      <div className="menu-container">
        <div className="logo">
          <a href="/" className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="32"><path fill="#33323D" fill-rule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/></svg>
          </a>
        </div>
        <div className="navbar-burger">
          {navbarOpen ?
            <button onClick={openMenu}className="navbar-close" aria-label="menu to close navbar"  aria-expanded="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19"><path fill="#33323D" fill-rule="evenodd" d="M17.132.661l.707.707L9.707 9.5l8.132 8.132-.707.707L9 10.207.868 18.34l-.707-.707L8.293 9.5.161 1.368.868.661 9 8.793 17.132.661z"/></svg>
            </button> :
            <button onClick={openMenu} className="navbar-hamburger"   aria-label="menu to open navbar">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="13"><g fill="#33323D" fill-rule="evenodd"><path d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z"/></g></svg>
            </button>
          }
         </div>
        <div className={navbarOpen ? "nav-item active" : " nav-item"}>
          <ul className='menu'>
            <li className='menu-item'>
              <Link to="/">Home</Link>
            </li>
            <li className='menu-item'>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className='menu-item'>
              <Link to="/contact-me">Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
