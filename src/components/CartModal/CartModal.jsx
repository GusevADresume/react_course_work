import React from "react";

function CartModal({ onChange }) {
  const handleCloseModal = () => onChange(true);

  return (
    <div className="ErrorWindow">
      Произошла ошибка, попробуйте снова
      <button className="ErrorBtn" onClick={handleCloseModal}>
        Попробую позже
      </button>
    </div>
  );
}

export { CartModal };
