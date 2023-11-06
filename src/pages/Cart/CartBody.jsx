import React from "react";
import { useState, useEffect } from "react";

function CartBody({ goods, onChange }) {
  const [good, setGood] = useState([]);

  useEffect(() => {
    setGood(goods);
  });

  const handleDellgoods = (e) => {
    onChange(e);
  };
  return (
    <>
      {good.map((object, index) => {
        return (
          <tr key={object.id}>
            <td scope="row">{index + 1}</td>
            <td>{object.title}</td>
            <td>{object.size}</td>
            <td>{object.count}</td>
            <td>{object.price} руб.</td>
            <td className="summ">{object.count * object.price} руб.</td>
            <td>
              <button
                id={index}
                onClick={handleDellgoods}
                className="btn btn-outline-danger btn-sm"
              >
                Удалить
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
}

export { CartBody };
