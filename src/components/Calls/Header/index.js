import React from "react";
import "./style.css";
import { useState } from "react";

const Header = ({ switchMenu, options = [{}] }) => {
  const [menus] = useState(options);

  const [selectedMenuIndex, selectMenuIndex] = useState(0);

  const chooseMenu = (index) => {
    selectMenuIndex(index);
    switchMenu(menus[index].value);
  };

  const MapOptions = () =>
    menus.map((menu, index) => (
      <li
        key={index}
        className={menu === menus[selectedMenuIndex] ? "Actived" : "NoActived"}
        disabled={menu === menus[selectedMenuIndex]}
        onClick={(e) => {
          e.preventDefault();
          if (menu === menus[selectedMenuIndex]) return;
          chooseMenu(index);
        }}
      >
        {menu.name}
      </li>
    ));

  return (
    <header className="HeaderCall">
      <ul>
        <MapOptions switchMenu={switchMenu} />
      </ul>
    </header>
  );
};

export default Header;
