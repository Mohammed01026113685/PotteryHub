import React from 'react';
import { Link } from 'react-router-dom';
import "../components/css/styles.css"; // تأكد من أن المسار صحيح
import logo from "./images/home/Pottery Hub logo with a transparent background.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"> 
          <img className="logo" src={logo} alt="Pottery Hub logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">الرئيسية</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">التعليم والتدريب</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">التسويق</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">تواصل معنا</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
