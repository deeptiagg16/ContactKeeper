import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Navbar = props => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <h1>
          <i className={props.icon}></i> {props.title}
        </h1>
        `
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        `
      </nav>
    </div>
  );
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};
Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt"
};

export default Navbar;
