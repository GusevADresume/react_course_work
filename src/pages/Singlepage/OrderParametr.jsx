import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { formationLS } from "./formationLS";
import { useDispatch } from "react-redux";
import { changeCartState } from "../../redux/Actions/actionCreators";

function OrderParametr({ id, title, price, sizes }) {
  const [goodsCount, setCount] = useState(1);
  const [selectSize, setSize] = useState(undefined);
  const dispatch = useDispatch();

  const handleChangeCount = (e) => {
    const sign = e.target.innerHTML;
    if (sign == "-") {
      setCount(goodsCount - 1 > 0 ? goodsCount - 1 : goodsCount);
    } else {
      setCount(goodsCount + 1 < 11 ? goodsCount + 1 : goodsCount);
    }
  };

  const handleSizeChoise = (e) => {
    setSize(e.target.id);
  };

  const handleAddGood = () => {
    const goodParam = {
      id: id,
      title: title,
      price: price,
      count: goodsCount,
      size: sizes[selectSize]["size"],
    };
    formationLS(goodParam);
    dispatch(changeCartState(JSON.parse(localStorage.getItem("cart"))));
  };

  return (
    <>
      <div className="text-center">
        <p>
          Размеры в наличии:
          {sizes != undefined
            ? sizes.map((element, index) => {
                if (element.available) {
                  return (
                    <span
                      key={index}
                      id={index}
                      onClick={handleSizeChoise}
                      className={
                        selectSize == index
                          ? "catalog-item-size selected"
                          : "catalog-item-size"
                      }
                    >
                      {element.size}
                    </span>
                  );
                }
              })
            : ""}
        </p>
        <p>
          Количество:
          <span className="btn-group btn-group-sm pl-2">
            <button onClick={handleChangeCount} className="btn btn-secondary">
              -
            </button>
            <span className="btn btn-outline-primary">{goodsCount}</span>
            <button onClick={handleChangeCount} className="btn btn-secondary">
              +
            </button>
          </span>
        </p>
      </div>
      <Link to={"/cart"}>
        <button
          onClick={handleAddGood}
          className={
            selectSize == undefined
              ? "btn btn-danger btn-block btn-lg hidden"
              : "btn btn-danger btn-block btn-lg"
          }
        >
          В корзину
        </button>
      </Link>
    </>
  );
}

export { OrderParametr };
