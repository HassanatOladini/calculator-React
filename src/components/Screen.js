//import react from "react";

export default Screen = ({ leftVal, operator, rightVal }) => (
  <div className="screen">
    <div className="leftValue">{leftVal}</div>
    <div className="operation">{operator}</div>
    <div className="rightValue">{rightVal}</div>
  </div>
);

//have props representing this
