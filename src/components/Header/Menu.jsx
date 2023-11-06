import React from "react";
import { NavLink } from "react-router-dom";
import headerLogo from "../../assets/header-logo.png";
import { MenuSearchIcon } from "../search/MenuSearchIcon";
import { BasketIcon } from "../BasketIcon/BasketIcon";

function Menu() {
  return (
    <div className="row">
      <div className="col">
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">
            <img src={headerLogo} alt="Bosa Noga" />
          </NavLink>
          <div className="collapase navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mr-auto">
              <NavLink className="nav-link" to="/">
                {" "}
                Главная
              </NavLink>
              <NavLink className="nav-link" to="/catalog">
                Каталог
              </NavLink>
              <NavLink className="nav-link" to="/about">
                О Магазине
              </NavLink>
              <NavLink className="nav-link" to="/contacts">
                Контакты
              </NavLink>
            </ul>
          </div>
        </nav>
      </div>
      <MenuSearchIcon />
      <BasketIcon />
    </div>
  );
}

export { Menu };
