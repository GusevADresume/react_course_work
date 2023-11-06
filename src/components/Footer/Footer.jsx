import React from "react";
import { Info } from "./Info";
import { Payment } from "./Payment";
import { Contacts } from "./Contacts";

function Footer() {
  return (
    <footer className="container bg-light footer">
      <div className="row">
        <Info />
        <Payment />
        <Contacts />
      </div>
    </footer>
  );
}

export { Footer };
