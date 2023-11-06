import React from "react";

function GoodPhoto({ photo }) {
  console.log(photo)
  return (
    <div className="col-5">
      <img
        src={photo != undefined ? photo[0] : ""}
        alt=""
        className="img-fluid singleImg"
      />
    </div>
  );
}

export { GoodPhoto };
