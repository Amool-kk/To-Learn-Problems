import { useState } from "react";
import { Link } from "react-router-dom";
import { BiRightArrow, BiDownArrow } from "react-icons/bi";
import { AuthContext } from "../../contexts/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="navigation">
      <h1>CodeFoxes</h1>
      <div
        className={open ? "hamburger expanded" : "hamburger"}
        onClick={handleClick}
      >
        <BiDownArrow />
      </div>
      <div className={open ? "navigation-menu open" : "navigation-menu"}>
        <ul>
          <li>
            <Link to="/" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={handleClick}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/articles" onClick={handleClick}>
              Articles
            </Link>
          </li>
          <li>
            <Link to="/problems" onClick={handleClick}>
              Problems
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleClick}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
