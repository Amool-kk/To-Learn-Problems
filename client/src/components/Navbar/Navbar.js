import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../../Contexts/Buttons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>CodeFoxes</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/articles">Articles</Link>
        <button className="mode">
          <Buttons />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
