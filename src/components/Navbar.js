import React from 'react';
import { Link } from 'react-router-dom';

const img = require('../assests/user.png');

const Navbar = () => (
  <nav className="navbar">
    <h1>Bookstore CMS</h1>
    <ul>
      <li><Link to="/">Books</Link></li>
      <li><Link to="/categories">Categories</Link></li>
    </ul>
    <img src={img} alt="user" />
  </nav>
);

export default Navbar;
