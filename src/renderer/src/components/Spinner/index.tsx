import React from "react";

const Spinner = ({ size = "" }) => (
  <div className={`lds-ring${size ? ` lds-ring-${size}` : ""}`}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Spinner;
