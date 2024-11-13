import React, { useState } from 'react';
import './Navbar.css'; // Make sure this is correctly linked

const Navbar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar">
      {/* Left section for hamburger menu */}
      <div className="left-section">
        <button className="hamburger-menu" onClick={toggleSidebar}>
          &#9776;
        </button>
      </div>

      {/* Logo in the middle */}
      <div className="logo">
        <img src="logo.png" alt="Logo" /> {/* Adjust the image path */}
      </div>

      {/* Right section for login icon */}
      <div className="right-section">
        <a href="/login" className="login-icon">
          Login
        </a>
      </div>

      {/* Sidebar for mobile */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
