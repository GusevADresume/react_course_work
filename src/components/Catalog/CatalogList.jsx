import React from "react";

import { RenderCatalog } from "./RenderCatalog";

function CatalogList({ goods, load }) {
  return (
    <>
      <div className="row-catalog">
        {goods.length == 0 && load == false
          ? "!!!Oh we don't have anything!!!!!"
          : goods.map((object) => {
              return <RenderCatalog key={object.id} object={object} />;
            })}
      </div>
    </>
  );
}

export { CatalogList };
