import React, { useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setCurrentPage,
  setMoviesFilter,
  setMoviesQuery,
} from "../reducer/slice/global_slice";

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    if (e.target.value !== "") setQuery(e.target.value);
    else {
      setQuery("");
      dispatch(setCurrentPage(1));
      dispatch(setMoviesQuery(""));
    }
  };
  const handleQuery = () => {
    dispatch(setMoviesFilter({}));
    dispatch(setCurrentPage(1));
    dispatch(setMoviesQuery(query));
    navigate("/movies");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(setMoviesFilter({}));
      dispatch(setCurrentPage(1));
      dispatch(setMoviesQuery(query));
      navigate("/movies");
    }
  };
  return (
    <div className="py-2 px-5 border-b-2 select-none">
      <div className=" flex w-[60%] rounded-3xl overflow-hidden">
        <Input
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          className="outline-none bg-[#1b202a] placeholder:text-gray-500 border-2 border-transparent focus:border-blue-400 p-3 text-md text-white h-[40px] flex-1 rounded-l-3xl transition-all"
          placeholder="Please enter the movie name..."
        />
        <Button
          onClick={handleQuery}
          className="text-white  right-0 z-20 bg-[#292f3b] font-bold  h-[40px] px-3"
        >
          Tìm kiếm
        </Button>
      </div>
    </div>
  );
};

export default Header;
