import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader_container">
      <div className="circle">
        <div className="ring">
          LOADING...
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
