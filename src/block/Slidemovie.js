import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Cardmovie from "./Cardmovie";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
const Slidemovie = (props) => {
  const movies_data = props.movies_data;
  return (
    <div className="px-5 ">
      <div className="flex items-center justify-between text-white capitalize font-bold text-lg">
        <h1 className="capitalize">{props.title}</h1>
        <NavLink
          to={`/movies/views/${props.url}`}
          className="cursor-pointer hover:underline hover:text-blue-400"
        >
          Xem thêm
        </NavLink>
      </div>
      <div className="py-5">
        {(movies_data?.results?.length === 0 || !movies_data?.results) && (
          <div className="grid grid-cols-5 h-[300px] gap-3">
            {new Array(5).fill("").map((item, index) => (
              <SwiperSlide key={index}>
                <Skeleton duration={Autoplay} className="w-full h-full" />
              </SwiperSlide>
            ))}
          </div>
        )}
        {movies_data?.results?.length > 0 && (
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            centeredSlides={false}
            pagination={{
              clickable: false,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {movies_data.results.map((item, index) => (
              <SwiperSlide key={index}>
                <Cardmovie
                  poster_path={item.poster_path}
                  title={item.title}
                  release_date={item.release_date}
                  id={item.id}
                  rating={item.vote_average}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Slidemovie;
