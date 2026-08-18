import React from "react";
import "../App.css";


function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
        <ul className="navbar-menu">

            <img src="./" alt="" /> 
          <div className="navbar-brand">
            Mughal Foods</div>
            <li className="navbar-item"><a href="#">Home</a></li>
            <li className="navbar-item"><a href="#menu">Menu</a></li>
            <li className="navbar-item"><a href="#contact">Contact</a></li>
            <li className="navbar-item"><a href="#wishlist">wishlist</a></li>

        </ul>
        </div>
        
      </nav>
    </header>
  );
}
export default Header;