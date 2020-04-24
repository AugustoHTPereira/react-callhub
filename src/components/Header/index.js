import React from "react";
import "./style.css";
import { MdNotifications } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const signOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <header className="Navbar">
      <div className="BrandCrumb">
        <h1>Callhub</h1>
      </div>

      <div className="Items">
        <ul>
          <li>
            <MdNotifications />
          </li>
          <li onClick={() => signOut()}>
            <FaSignOutAlt />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
