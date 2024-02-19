import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import CircleWithRating from "./CircleWithRating";
import Marquee from "react-fast-marquee";

const Cardmovie = (props) => {
  const posterUrl = props.poster_path
    ? `https://image.tmdb.org/t/p/w500/${props.poster_path}`
    : "https://static2.yan.vn/YanNews/2167221/202302/danh-sach-phim-conan-movie-moi-nhat-nam-2023-cuc-hap-dan-0d1d0dbf.jpg";
  return (
    <div className="p-2 bg-slate-800 h-full cursor-pointer overflow-hidden select-none rounded-md relative">
      <div className="h-[250px] w-full cursor-pointer overflow-hidden select-none">
        <img
          src={posterUrl}
          alt="Not found"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="flex flex-col gap-y-1 mt-2">
        <Marquee>
          <p className="text-white font-bold text-left ">
            <span className="text-lg">{props.title}</span>
          </p>
        </Marquee>

        <div className="flex items-start gap-x-2 text-sm">
          <Button className="bg-red-400 px-1 rounded-sm text-white">
            Action
          </Button>
          <Button className="bg-red-400 px-1 rounded-sm text-white">
            Adventure
          </Button>
        </div>
        <div className="absolute top-3 right-3">
          <CircleWithRating rating={props.rating}></CircleWithRating>
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black opacity-0 hover:opacity-50 transition-all ">
          <i className="text-4xl fa-solid fa-circle-play text-white transition-all"></i>
          <Link
            to={`/movies/detail/${props.id}`}
            className="text-white w-full h-full absolute"
          ></Link>
        </div>
      </div>
    </div>
  );
};

export default Cardmovie;
