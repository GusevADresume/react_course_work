import React from "react";

function CartHead() {
  return (
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Название</th>
        <th scope="col">Размер</th>
        <th scope="col">Кол-во</th>
        <th scope="col">Стоимость</th>
        <th scope="col">Итого</th>
        <th scope="col">Действия</th>
      </tr>
    </thead>
  );
}

export { CartHead };
