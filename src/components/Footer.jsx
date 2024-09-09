import { Link } from "react-router-dom";
import React from "react";
import CA from "../assets/fav.png";
import "./Footer.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer">
      <div class="colx">
        <div>
          <div>
            <Link to="/">
              <img id="footer_logo" src={CA} />
            </Link>
            <h1>Learn4Climate</h1>
          </div>
          <div class="social">
            <a
              href="https://www.google.com/maps/place/%E0%A6%86%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%B0%E0%A7%8D%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A6%BF%E0%A6%95+%E0%A6%87%E0%A6%B8%E0%A6%B2%E0%A6%BE%E0%A6%AE%E0%A7%80+%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F+%E0%A6%9A%E0%A6%9F%E0%A7%8D%E0%A6%9F%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE/@22.4965971,91.7210784,17z/data=!3m1!4b1!4m6!3m5!1s0x30ad2777a615585d:0xdcf908f6e4f3a713!8m2!3d22.4965971!4d91.7210784!16zL20vMDkwejU0?entry=ttu"
              target="_blank"
              class="contact-icon"
            >
              <FaMapMarkerAlt size={30} />
            </a>
            <a
              href="https://www.facebook.com/iiuc.ac.bd/"
              target="_blank"
              class="contact-icon"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.youtube.com/@internationalislamicuniver5603"
              target="_blank"
              class="contact-icon"
            >
              <FaYoutube size={30} />
            </a>
            <a
              href="https://www.linkedin.com/company/iiuctg"
              target="_blank"
              class="contact-icon"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
      <div>
        <h3>2024 © All Rights Reserved</h3>
      </div>
    </footer>
  );
}

export default Footer;
