import { Link } from "react-router-dom";
import React from "react";
import CA from "../assets/fav.png";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLeaf,
} from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">
        {/* Logo and Tagline Section */}
        <div className="footer-logo-section">
          <Link to="/">
            <img
              id="footer_logo"
              src={CA}
              alt="Learn4Climate Logo"
              loading="lazy"
            />
          </Link>
          <h1>Learn4Climate</h1>
          <p>Empowering the world to fight climate change.</p>
          <div className="footer-tagline">
            <FaLeaf size={20} />
            <span>
              Made by Team Xtraterrestrials for NASA Space Apps Challenge
            </span>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="footer-social-section">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a
              href="https://www.google.com/maps/place/your-location"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Location"
            >
              <FaMapMarkerAlt size={24} />
            </a>
            <a
              href="https://www.facebook.com/your-page"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.youtube.com/your-channel"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="YouTube"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.linkedin.com/your-company"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Legal Section */}
        <div className="footer-legal-section">
          <p>© 2024 Learn4Climate. All Rights Reserved.</p>
          <p>Part of the NASA Space Apps Challenge.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
