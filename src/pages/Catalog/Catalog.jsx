import React from "react";
import { Catalog } from "../../components/Catalog/Catalog";

function CatalogPage() {
  return (
    <>
      <Catalog search={true} />
    </>
  );
}

export { CatalogPage };
