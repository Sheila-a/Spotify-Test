import React from "react";
import MidSection from "../../layouts/MiddleSection/index";
import RightSection from "../../layouts/RightSection";
import Sidebar from "../../layouts/Sidebar/index";
import design from "./style.module.css";

const Home = () => {
  return (
    <div className={design.main}>
      <Sidebar />
      <MidSection />
      <RightSection />
    </div>
  );
};

export default Home;
