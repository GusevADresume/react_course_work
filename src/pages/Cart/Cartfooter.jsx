import React from "react";
import { useState, useEffect } from "react";

function Cartfooter({ summ }) {
  const [summm, setSumm] = useState(0);

  useEffect(() => {
    setSumm(summ);
  }, [summ]);
  return (
    <tr>
      <td colSpan="5" className="text-right">
        Общая стоимость
      </td>
      <td>{summm} руб.</td>
      <td></td>
    </tr>
  );
}

export { Cartfooter };
