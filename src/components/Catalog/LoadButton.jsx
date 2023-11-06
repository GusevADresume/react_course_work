import React from "react";

function LoadButton({ onChange, visible }) {
  return (
    <div>
      <button
        onClick={onChange}
        className={visible ? "btn btn-outline-primary btnload" : "hidden"}
      >
        Загрузить еще
      </button>
    </div>
  );
}

export { LoadButton };
