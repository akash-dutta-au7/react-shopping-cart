import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="Header">
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default Header;
