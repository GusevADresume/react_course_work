import React from "react";
import icon from "../../assets/basket .png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function BasketIcon() {
  const [count, setCount] = useState(0);

  const { countSuccess } = useSelector((state) => state.cartState);

  const getCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart != null) {
      setCount(cart.length);
    }
  };

  useEffect(() => {
    getCount();
  });

  useEffect(() => {
    getCount();
  }, [countSuccess]);

  return (
    <div>
      {count > 0 ? <div className="basket-menu-count">{count}</div> : ""}
      <NavLink className="navbar-brand" to="/cart">
        <img src={icon} alt="basket" />
      </NavLink>
    </div>
  );
}

export { BasketIcon };
