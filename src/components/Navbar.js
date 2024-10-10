import React from 'react';
import { Link } from 'react-router-dom';
import "../components/styles.css";
import logo from "./images/home/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/"> <img className="logo" src={logo} alt="logo" /></Link>
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
