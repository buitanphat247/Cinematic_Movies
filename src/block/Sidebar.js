import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBars, faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faCirclePlay as faRegularCirclePlay,
  faHeart as faRegularHeart,
} from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import Button from "../Components/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const items_side_bar = [
  {
    id: "sdb_01",
    title: "home",
    logo: <FontAwesomeIcon icon={faHouse} />,
    url: "/",
  },
  {
    id: "sdb_02",
    title: "Movies",
    logo: <FontAwesomeIcon icon={faBars} />,
    url: "/movies",
  },
  // {
  //   id: "sdb_04",
  //   title: "popular",
  //   logo: <FontAwesomeIcon icon={faRegularStar} />,
  //   url: "/popular",
  // },
  {
    id: "sdb_05",
    title: "recently watched",
    logo: <FontAwesomeIcon icon={faRegularCirclePlay} />,
    url: "#",
  },
  {
    id: "sdb_06",
    title: "favorites",
    logo: <FontAwesomeIcon icon={faRegularHeart} />,
    url: "#",
  },
  {
    id: "sdb_07",
    title: "download",
    logo: <FontAwesomeIcon icon={faDownload} />,
    url: "#",
  },
];

const Sidebar = (props) => {
  const notify = () =>
    toast.info("Tính năng đang được phát triển", {
      pauseOnHover: false,
    });
  return (
    <div
      className={`bg-[#181b21] sticky top-0 bottom-0 right-0 left-0 h-[100vh]  text-white px-5 border-r ${props.class} select-none`}
    >
      <h1
        id="logo"
        className="text-2xl text-center font-bold uppercase border-b-2 py-3 select-none"
      >
        Movie Cinematic
      </h1>
      <ul className="text-lg grid gap-y-3 py-3 ">
        {items_side_bar.map((item, index) =>
          item.url !== "#" ? (
            <NavLink
              to={item.url}
              key={item.id}
              id={item.id}
              className="flex items-center capitalize gap-x-3 p-3 cursor-pointer border-2 border-transparent opacity-35 hover:border-white hover:opacity-100 rounded-2xl transition-all"
              activeClassName="active" // Đặt className active khi NavLink được kích hoạt
            >
              <span>{item.logo}</span>
              <span>{item.title}</span>
            </NavLink>
          ) : (
            <Button
              onClick={notify}
              key={item.id}
              id={item.id}
              className="flex items-center capitalize gap-x-3 p-3 cursor-pointer border-2 border-transparent opacity-35 hover:border-white hover:opacity-100 rounded-2xl transition-all"
              activeClassName="active" // Đặt className active khi NavLink được kích hoạt
            >
              <span>{item.logo}</span>
              <span>{item.title}</span>
            </Button>
          )
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
