import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>CodeFoxes</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <button className="mode">Dark Mode</button>
      </div>
    </div>
  );
};

export default Navbar;
