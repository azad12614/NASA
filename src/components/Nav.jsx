import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar/dropdown visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu open/close
  };

  return (
    <nav className="navbar">
      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="material-symbols-outlined">menu</span>
      </div>

      {/* Logo or Brand Name (Optional) */}
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          Learn4Climate
        </Link>
      </div>

      {/* Navbar Links */}
      <ul className={`navbar-list ${isOpen ? "open" : ""}`}>
        <li className="navbar-item">
          <span className="material-symbols-outlined">home</span>
          <Link to="/" className="navbar-link" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <span className="material-symbols-outlined">info</span>
          <a href="/#About" className="navbar-link" onClick={toggleMenu}>
            About
          </a>
        </li>
        <li className="navbar-item">
          <span className="material-symbols-outlined">visibility</span>
          <Link to="/Goal13" className="navbar-link" onClick={toggleMenu}>
            Climate Action
          </Link>
        </li>
        <li className="navbar-item">
          <span className="material-symbols-outlined">play_lesson</span>
          <Link to="/Plan" className="navbar-link" onClick={toggleMenu}>
            Lesson Plan
          </Link>
        </li>
        <li className="navbar-item">
          <span className="material-symbols-outlined">contacts</span>
          <a href="/#footer" className="navbar-link" onClick={toggleMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
