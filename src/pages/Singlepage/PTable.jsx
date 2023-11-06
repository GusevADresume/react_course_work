import React from "react";

function PTable({ singleGoods }) {
  return (
    <table className="table table-bordered">
      <tbody className="table table-bordered">
        <tr>
          <td>Артикул</td>
          <td>{singleGoods.sku}</td>
        </tr>
        <tr>
          <td>Производитель</td>
          <td>{singleGoods.manufacturer}</td>
        </tr>
        <tr>
          <td>Черный</td>
          <td>{singleGoods.color}</td>
        </tr>
        <tr>
          <td>Материалы</td>
          <td>{singleGoods.material}</td>
        </tr>
        <tr>
          <td>Сезон</td>
          <td>{singleGoods.season}</td>
        </tr>
        <tr>
          <td>Повод</td>
          <td>{singleGoods.reason}</td>
        </tr>
      </tbody>
    </table>
  );
}

export { PTable };
