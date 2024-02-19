/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setMovies } from "./reducer/slice/global_slice";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Dashboard from "./layout/Dashboard";
import Detail from "./page/Detail";
import Movies from "./page/Movies";
import Error from "./page/Error";
import MobileWarningPage from "./page/MobileWarningPage";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let data_movies = {};
        const response1 = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=674f9dae5be4cdbe4fcde7c02238d097"
        );
        data_movies["now_playing"] = response1.data;
        const response2 = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=674f9dae5be4cdbe4fcde7c02238d097"
        );
        data_movies["popular"] = response2.data;
        const response3 = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=674f9dae5be4cdbe4fcde7c02238d097"
        );
        data_movies["top_rated"] = response3.data;
        const response4 = await axios.get(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=674f9dae5be4cdbe4fcde7c02238d097"
        );
        data_movies["upcoming"] = response4.data;
        const response5 = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=674f9dae5be4cdbe4fcde7c02238d097"
        );
        data_movies["genres"] = response5.data;
        dispatch(setMovies(data_movies));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [dispatch]);
  if (window.innerWidth < 1024) {
    return <MobileWarningPage></MobileWarningPage>;
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/movies/views/:slug" element={<Movies />}></Route>
            <Route path="/movies/detail/:slug" element={<Detail />}></Route>
          </Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
};

export default App;
