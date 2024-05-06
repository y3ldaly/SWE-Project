import React from 'react';
import './urgentNav.css'; // Make sure to create a corresponding CSS file for styling

function Navbar() {
  return (
    <header>
      <h1>HIFRY HALAL</h1>
      <nav className="navbar">
        <ul>
            <li></li>
            <li></li>
          <li><a href="main.html" className="navButton">Home</a></li>
          <li><a href="menu.html" className="navButton">Menu</a></li>
          <li><a href="review.html" className="navButton">Review</a></li>
          <li><a href="about.html" className="navButton">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
