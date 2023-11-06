import React from "react";
import { NavLink } from "react-router-dom";

function Info() {
  return (
    <div className="col">
      <section>
        <h5>Информация</h5>
        <ul className="nav flex-column">
          <li className="nav-item-footer">
            <NavLink to="/about" className="nav-link-footer">
              О Магазине
            </NavLink>
          </li>
          <li className="nav-item-footer">
            <NavLink to="/catalog" className="nav-link-footer">
              Каталог
            </NavLink>
          </li>
          <li className="nav-item-footer">
            <NavLink to="/contacts" className="nav-link-footer">
              Контакты
            </NavLink>
          </li>
        </ul>
      </section>
    </div>
  );
}

export { Info };
