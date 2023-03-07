import React from "react";
import design from "./style.module.css";

export const FavArtist = () => {
  return (
    <div className={design.favArtist}>
      <div className={design.FA_left}>
        <img src="" alt="round" />
        <div className={design.FA_left_inner}>
          <h4>Taylor Swift</h4>
          <p>196 songs in library</p>
        </div>
      </div>
      <div className={design.dropdown}>..</div>
    </div>
  );
};
