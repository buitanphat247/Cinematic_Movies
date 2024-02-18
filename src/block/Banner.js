import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Banner = (props) => {
  return (
    <div className="h-[450px] p-5 select-none">
      {!props.data?.results && (
        <div className="w-full h-full">
          <Skeleton duration={Autoplay} className="w-full h-full" />
        </div>
      )}

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-md "
      >
        {props.data?.results?.length > 0 &&
          props.data.results.map((item, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                alt={item.title}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Banner;
