import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="LendingHeader">
    <div className="Brand">
      <h1>Callhub</h1>
    </div>

    <div className="Actions">
      <Link className="Button" to="/register">Nova conta</Link>
      <Link to="/login">Login</Link>
    </div>
  </header>
);

export default Header;
