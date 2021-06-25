//import react from "react";

export const NumberButton = ({ value, appendNumber }) => (
  <button className="numberBtn" onClick={() => appendNumber(value)}>
    {value}
  </button>
);

export const OperatorButton = ({ label, spanTwo, onClick }) => (
  <button
    className={`operatorBtn ${spanTwo ? "span-two" : ""}`}
    onClick={onClick}
  >
    {label}
  </button>
);
