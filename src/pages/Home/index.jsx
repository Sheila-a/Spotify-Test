import React from "react";
import MainSection from "../../layouts/MainSection/index";
import Sidebar from "../../layouts/Sidebar/index";
import design from "./style.module.css";

const Home = () => {
  return (
    <div className={design.main}>
      <Sidebar />
      <MainSection />
    </div>
  );
};

export default Home;
