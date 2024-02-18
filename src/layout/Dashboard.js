import React from "react";
import { useSelector } from "react-redux";
import Banner from "../block/Banner";
import Slidemovie from "../block/Slidemovie";

const Dashboard = (props) => {
  const data_movies = useSelector((state) => state.global.movies);
  return (
    <div>
      <Banner data={data_movies.upcoming}></Banner>
      <Slidemovie
        title="upcoming"
        movies_data={data_movies.upcoming}
        url="upcoming"
      ></Slidemovie>
      <Slidemovie
        title="now trending"
        movies_data={data_movies.now_playing}
        url="now_playing"
      ></Slidemovie>
      <Slidemovie
        title="popular"
        movies_data={data_movies.popular}
        url="popular"
      ></Slidemovie>
      <Slidemovie
        title="top rated"
        movies_data={data_movies.top_rated}
        url="top_rated"
      ></Slidemovie>
    </div>
  );
};

export default Dashboard;
