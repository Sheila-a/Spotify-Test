import React from "react";
import design from "./styles.module.css";

export const Shortcut = (props) => {
  return (
    <button className={design.shortcut}>
      {/* <img src={props.img} alt="" /> */}
      {/* <p>{props.text}</p> */}
      <img src="" alt="img" />
      <p>Chill Hits</p>
    </button>
  );
};
