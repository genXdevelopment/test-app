import React from "react";
import './NavbarStyles.css';

function Navbar() {
    return (
        <>
            <nav className="navbar-container">
                <div className="navbar-logo">
                    <h1>logo</h1>
                </div>
                <div className="nav-menu">
                    <p>home</p>
                    <p>about</p>
                    <p>contact</p>
                    <p>blog</p>
                </div>
            </nav>
        </>
    )
}

export default Navbar;