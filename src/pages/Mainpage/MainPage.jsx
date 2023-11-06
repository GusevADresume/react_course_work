import React from "react";
import { Hits } from "../../components/Hits/Hits";
import { Catalog } from "../../components/Catalog/Catalog";

function MainPage() {
  return (
    <>
      <Hits />
      <Catalog search={false} />
    </>
  );
}

export { MainPage };
