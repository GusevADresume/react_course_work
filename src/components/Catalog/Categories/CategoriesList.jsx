import React from "react";

function CategoriesList({ element, select }) {
  return (
    <a
      id={element.id}
      className={
        element.id == select
          ? "nav-link-categories linkactive"
          : "nav-link-categories "
      }
    >
      {element.title}
    </a>
  );
}

export { CategoriesList };
