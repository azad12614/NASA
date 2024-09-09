import React, { useState } from "react";
import "./Nav.css"; // Create a CSS file for styling

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div class="nav">
            <button onClick={toggleSidebar} className={`Btn-Container ${isOpen ? "open" : ""}`}>
                {/* <span class="text">Sidebar</span> */}
                <span class="icon-Container">
                    <svg
                        width="24"
                        height="20"
                        viewBox="0 0 24 20"
                        fill="nones"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${isOpen ? "close" : "open"}`}
                    >
                        <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
                        <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
                        <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
                        <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
                        <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
                        <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
                        <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
                        <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
                        <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
                        <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
                    </svg>
                    <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="nones"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${isOpen ? "open" : "close"}`}
                    >
                        <circle cx="9.85851" cy="1.61321" r="1.5" fill="black"></circle>
                        <circle cx="13.9811" cy="1.61321" r="1.5" fill="black"></circle>
                        <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
                        <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
                        <circle cx="1.61321" cy="9.5" r="1.5" fill="black"></circle>
                        <circle cx="5.73583" cy="9.5" r="1.5" fill="black"></circle>
                        <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
                        <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
                        <circle cx="9.85851" cy="17.3868" r="1.5" fill="black"></circle>
                        <circle cx="13.9811" cy="17.3868" r="1.5" fill="black"></circle>
                    </svg>
                </span>
            </button>
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="/#Hero">Home</a></li>
                    <li><a href="/#About">About</a></li>
                    <li><a href="/quiz">Quiz</a></li>
                    <li><a href="/#footer">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;