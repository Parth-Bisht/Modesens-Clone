import React from "react";
import FirstData from "./FirstData";
import "./Navbar.css";
function Data({ r }) {
  return (
    <div>
      {console.log(r)}
      <div className="secondDiv">
        <FirstData r={r} />
      </div>
    </div>
  );
}

export default Data;
