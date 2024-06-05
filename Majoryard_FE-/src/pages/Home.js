import React from "react";
import "./Home.css";
import HeaderSidebarSet from "../component/HeaderSidebar/HeaderSidebarSet";
import HomeContents from "../component/BoardComponent/HomeBoard/HomeContents";

const Home = () => {

  return (
    <div>
      <HeaderSidebarSet />
      <HomeContents />
    </div>
  );
};

export default Home;
