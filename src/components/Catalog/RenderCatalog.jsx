import React from "react";
import { Link } from "react-router-dom";

function RenderCatalog({ object }) {
  return (
    <div key={object.id} className="col-4">
      <div className="catalog-item-card">
        <img
          src={object.images[0]}
          alt={object.title}
          className="card-img-top img-fluid"
        />
        <div className="card-body">
          <p className="card-text">{object.title}</p>
          <p className="card-text">{object.price}</p>
          <Link
            key={object.id + 2}
            className="btn btn-outline-primary"
            to={`/catalog/${object.id}`}
          >
            Заказать
          </Link>
        </div>
      </div>
    </div>
  );
}

export { RenderCatalog };
