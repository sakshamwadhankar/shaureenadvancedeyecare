import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar fade-in-up visible">
      <div className="nav-spacer"></div>
      <ul className="nav-links">
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
      <div className="nav-icons">

        <button className="icon-btn" aria-label="Profile">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </button>
        <button className="contact-btn">Contact Us</button>
      </div>
    </nav>
  );
}
