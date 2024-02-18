import React from "react";
import Sidebar from "../block/Sidebar";
import { Outlet } from "react-router";
import Header from "../block/Header";

const Home = () => {
  return (
    <div className="mh-[100vh] grid grid-cols-5">
      <Sidebar class={" col-span-1"}></Sidebar>
      <div id="container" className="col-span-4 bg-[#181b21]">
        <Header></Header>
        <Outlet className=""></Outlet>
      </div>
    </div>
  );
};

export default Home;
