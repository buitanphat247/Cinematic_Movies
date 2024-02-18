import React from "react";
import { Link } from "react-router-dom";

const Cardmovie = (props) => {
  const posterUrl = props.poster_path
    ? `https://image.tmdb.org/t/p/w500/${props.poster_path}`
    : "https://static2.yan.vn/YanNews/2167221/202302/danh-sach-phim-conan-movie-moi-nhat-nam-2023-cuc-hap-dan-0d1d0dbf.jpg";
  return (
    <div className="h-[300px] w-full cursor-pointer relative rounded-md overflow-hidden select-none">
      <img
        src={posterUrl}
        alt="Not found"
        className="w-full h-full object-cover "
      />

      <p className="absolute top-0 w-full text-center h-[40px] flex items-center justify-center bg-[#292f3b] px-3 font-bold text-yellow-200 uppercase text-sm">
        <span className=" line-clamp-2">{props.title}</span>
      </p>
      <p className="absolute bottom-0 w-full text-center h-[40px] flex items-center justify-center bg-[#292f3b] px-3 font-bold text-yellow-200 uppercase">
        Watch now
      </p>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black opacity-0 hover:opacity-50 transition-all ">
        <i className="text-4xl fa-solid fa-circle-play text-white transition-all"></i>
        <Link
          to={`/movies/detail/${props.id}`}
          className="text-white w-full h-full absolute"
        ></Link>
      </div>
    </div>
  );
};

export default Cardmovie;
