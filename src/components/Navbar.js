import React from 'react';
import {  Link } from "react-router-dom";

const navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/portfolio">Portfolio</Link>
    </li>
    <li>
      <Link to="/contact-me">Contact Me</Link>
    </li>
  </div>
  );
}

export default navbar;
