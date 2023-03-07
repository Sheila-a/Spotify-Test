import React from "react";
import design from "./style.module.css";

const Dash = (props) => {
  return (
    <div className={design.dash}>
      <img src={props.ico} alt="home" />
      <p>{props.tags}</p>
    </div>
  );
};

export default Dash;
