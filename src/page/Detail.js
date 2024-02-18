import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Picturedetail from "../block/Picturedetail";
import Button from "../Components/Button";
import Slidemovie from "../block/Slidemovie";
import axios from "axios";
import Profile from "../block/Profile";
import { useDispatch } from "react-redux";
import { setSimilarId } from "../reducer/slice/global_slice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { toast } from "react-toastify";

const Detail = () => {
  const { slug } = useParams();
  const [movies_data_detail, setMoviesDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    let data_detail = {};
    const fetchMovie = async () => {
      setIsLoading(true);
      setTimeout(async () => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${slug}?api_key=674f9dae5be4cdbe4fcde7c02238d097`
          );
          data_detail["detail_main_movie"] = response.data;
          const response_video = await axios.get(
            `https://api.themoviedb.org/3/movie/${slug}/videos?api_key=674f9dae5be4cdbe4fcde7c02238d097`
          );
          data_detail["key_main_video_youtube"] =
            response_video.data.results[0].key;
          const response_keyword = await axios.get(
            `https://api.themoviedb.org/3/movie/${slug}/keywords?api_key=674f9dae5be4cdbe4fcde7c02238d097`
          );
          data_detail["keyword_main_movie"] = response_keyword.data.keywords;
          const response_credit = await axios.get(
            `https://api.themoviedb.org/3/movie/${slug}/credits?api_key=674f9dae5be4cdbe4fcde7c02238d097`
          );
          data_detail["credit_main_movie"] = response_credit.data;
          const reseponse_similar_movies = await axios.get(
            `https://api.themoviedb.org/3/movie/${slug}/similar?api_key=674f9dae5be4cdbe4fcde7c02238d097`
          );
          data_detail["id_movie_similar_main_movie"] =
            reseponse_similar_movies.data;
          setMoviesDetail(data_detail);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      }, 1500);
    };
    fetchMovie();
    dispatch(setSimilarId(slug));
  }, [dispatch, slug]);

  return (
    <div className="py-3 flex flex-col gap-y-5">
      <div className="px-5">
        {isLoading && (
          <div className="h-[550px]">
            <Skeleton className="w-full h-full" />
          </div>
        )}
        {!isLoading && (
          <Picturedetail
            keyVideo={movies_data_detail.key_main_video_youtube}
            url_image={movies_data_detail.detail_main_movie.backdrop_path}
          ></Picturedetail>
        )}
      </div>

      <div className="text-white grid gap-y-5 px-5 ">
        {isLoading ? (
          <div className="grid grid-cols-3 gap-x-5">
            <div className="h-[40px] col-span-2">
              <Skeleton className="w-full h-full" />
            </div>
            <div className="h-[40px] grid grid-cols-5 gap-x-2">
              <Skeleton className="w-full h-full" />
              <Skeleton className="w-full h-full" />
              <Skeleton className="w-full h-full" />
              <Skeleton className="w-full h-full" />
              <Skeleton className="w-full h-full" />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">
              {movies_data_detail.detail_main_movie.title}
            </h1>
            <div className="flex gap-x-2 font-bold">
              {movies_data_detail?.detail_main_movie?.genres?.length > 0 &&
                movies_data_detail?.detail_main_movie?.genres.map(
                  (item, index) => (
                    <Button
                      key={index}
                      className="border-2 border-gray-500 px-5 py-2 rounded-md transition-all hover:bg-slate-800"
                    >
                      {item.name}
                    </Button>
                  )
                )}
            </div>
          </div>
        )}

        {isLoading ? (
          <>
            <div className="flex space-x-3">
              <div className="h-[30px] w-[130px]">
                <Skeleton className="w-full h-full" />
              </div>
              <div className="h-[30px] w-[110px]">
                <Skeleton className="w-full h-full" />
              </div>
              <div className="h-[30px] w-[110px]">
                <Skeleton className="w-full h-full" />
              </div>
            </div>
            <div className="w-[190px]">
              <Skeleton className="w-[150px] h-[50px]" />
            </div>
          </>
        ) : (
          <div>
            <ul className="flex gap-x-3 select-none">
              <li className="border-2 px-5 py-1 rounded-md  border-gray-500 font-bold cursor-pointer  transition-all ">
                {movies_data_detail?.detail_main_movie?.release_date}
              </li>
              <li className="flex gap-x-2 border-2 rounded-md px-5 py-1  border-gray-500 font-bold cursor-pointer  transition-all ">
                <span>
                  <i className="fa-solid fa-star text-yellow-300"></i>
                </span>
                <span>
                  {movies_data_detail?.detail_main_movie?.vote_average}
                </span>
              </li>
              <li className="border-2 px-5 py-1 rounded-md border-gray-500 font-bold cursor-pointer  transition-all ">
                {movies_data_detail?.detail_main_movie?.status}
              </li>
            </ul>
            <Button
              onClick={(e) => {
                toast.info("Tính năng đang được phát triển", {
                  pauseOnHover: false,
                });
              }}
              className="text-lg py-3 border-2 border-gray-500 w-auto font-[500] text-yellow-400 rounded-md px-5 flex items-center justify-center gap-x-2 mt-5   transition-all hover:bg-slate-800"
            >
              <span>
                <i className="fa-solid fa-plus"></i>
              </span>
              <span>Add to playlist</span>
            </Button>
          </div>
        )}

        <div className="grid grid-cols-2 gap-x-10">
          {isLoading ? (
            <>
              <div className="flex flex-col gap-y-2">
                <div className="h-[40px] w-[130px]">
                  <Skeleton className="w-full h-full" />
                </div>
                <p>
                  <Skeleton className="w-full h-[10px]" />
                  <Skeleton className="w-full h-[10px]" />
                  <Skeleton className="w-full h-[10px]" />
                  <Skeleton className="w-full h-[10px]" />
                  <Skeleton className="w-full h-[10px]" />
                  <Skeleton className="w-full h-[10px]" />
                  <Skeleton className="w-full h-[10px]" />
                  <Skeleton className="w-full h-[10px]" />
                  <Skeleton className="w-full h-[10px]" />
                  <Skeleton className="w-full h-[10px]" />
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p>
                  <Skeleton className="w-full h-[10px]" />
                  <Skeleton className="w-full h-[10px]" />
                  <Skeleton className="w-full h-[10px]" />
                  <Skeleton className="w-full h-[10px]" />
                  <Skeleton className="w-full h-[10px]" />
                  <Skeleton className="w-full h-[10px]" />
                  <Skeleton className="w-full h-[10px]" />
                  <Skeleton className="w-full h-[10px]" />
                  <Skeleton className="w-full h-[10px]" />
                  <Skeleton className="w-full h-[10px]" />
                  <Skeleton className="w-full h-[10px]" />
                  <Skeleton className="w-full h-[10px]" />
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-y-2">
                <h3 className="capitalize text-white rounded-md text-xl font-bold">
                  Summary
                </h3>
                <p className="text-justify">
                  {movies_data_detail?.detail_main_movie?.overview}
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                {movies_data_detail?.detail_main_movie?.tagline !== "" && (
                  <p>
                    <span className="font-bold">Tagline: </span>
                    <span>
                      {movies_data_detail?.detail_main_movie?.tagline}
                    </span>
                  </p>
                )}
                {movies_data_detail?.detail_main_movie?.spoken_languages
                  ?.length > 0 && (
                  <p>
                    <span className="font-bold">Language: </span>
                    {movies_data_detail?.detail_main_movie?.spoken_languages?.map(
                      (item, index) => {
                        const comma = index > 0 ? ", " : "";
                        const isLast =
                          index ===
                          movies_data_detail?.detail_main_movie
                            ?.spoken_languages?.length -
                            1;
                        const period = isLast ? "." : "";
                        return (
                          <span key={index}>
                            {comma}
                            {item.name}
                            {period}
                          </span>
                        );
                      }
                    )}
                  </p>
                )}
                {movies_data_detail?.detail_main_movie?.production_countries
                  ?.length > 0 && (
                  <p>
                    <span className="font-bold">Production: </span>
                    {movies_data_detail?.detail_main_movie?.production_countries?.map(
                      (item, index) => {
                        const comma = index > 0 ? ", " : "";
                        const isLast =
                          index ===
                          movies_data_detail?.detail_main_movie
                            ?.production_countries?.length -
                            1;
                        const period = isLast ? "." : "";
                        return (
                          <span key={index}>
                            {comma}
                            {item.name}
                            {period}
                          </span>
                        );
                      }
                    )}
                  </p>
                )}
                {movies_data_detail?.detail_main_movie?.production_companies
                  ?.length > 0 && (
                  <p>
                    <span className="font-bold">Companies: </span>
                    {movies_data_detail?.detail_main_movie?.production_companies?.map(
                      (item, index) => {
                        const comma = index > 0 ? ", " : "";
                        const isLast =
                          index ===
                          movies_data_detail?.detail_main_movie
                            ?.production_companies?.length -
                            1;
                        const period = isLast ? "." : "";
                        return (
                          <span key={index}>
                            {comma}
                            {item.name}
                            {period}
                          </span>
                        );
                      }
                    )}
                  </p>
                )}
                {movies_data_detail?.keyword_main_movie?.length > 0 && (
                  <p>
                    <span className="font-bold">Keywords: </span>
                    {movies_data_detail?.keyword_main_movie?.map(
                      (item, index) => {
                        const comma = index > 0 ? ", " : "";
                        const isLast =
                          index ===
                          movies_data_detail?.keyword_main_movie?.length - 1;
                        const period = isLast ? "." : "";
                        return (
                          <span key={index}>
                            {comma}
                            {item.name}
                            {period}
                          </span>
                        );
                      }
                    )}
                  </p>
                )}
                {movies_data_detail.detail_main_movie.release_date !== "" && (
                  <p>
                    <span className="font-bold">Public: </span>
                    <span>
                      {movies_data_detail.detail_main_movie.release_date}.
                    </span>
                  </p>
                )}
                {movies_data_detail.detail_main_movie.homepage && (
                  <p>
                    <span className="font-bold">Homepage: </span>
                    <span className="break-all hover:text-blue-500 hover:underline transition-all">
                      <a
                        target="_blank"
                        href={movies_data_detail.detail_main_movie.homepage}
                        rel="noreferrer"
                      >
                        {movies_data_detail.detail_main_movie.homepage}.
                      </a>
                    </span>
                  </p>
                )}
                {movies_data_detail.detail_main_movie.runtime !== "" && (
                  <p>
                    <span className="font-bold">Duration: </span>
                    <span>
                      {movies_data_detail.detail_main_movie.runtime} min.
                    </span>
                  </p>
                )}
                {movies_data_detail.detail_main_movie.status !== "" && (
                  <p>
                    <span className="font-bold">Status: </span>
                    <span>{movies_data_detail.detail_main_movie.status}.</span>
                  </p>
                )}
              </div>
            </>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {isLoading
            ? new Array(10).fill("").map((item, index) => (
                <div key={index} className="w-[100px] h-[100px] rounded-md">
                  <Skeleton className="w-full h-full" />
                </div>
              ))
            : movies_data_detail?.credit_main_movie?.credits?.cast?.map(
                (item, index) => (
                  <Profile
                    key={index}
                    name={item.original_name}
                    character={item.character}
                    profile_path={item.profile_path}
                  />
                )
              )}
        </div>
      </div>

      {isLoading ? (
        <div className="px-5 flex flex-col gap-y-5">
          <div className="flex space-x-2 justify-between">
            <div className="w-[140px] h-[30px]">
              <Skeleton className="w-full h-full" />
            </div>
            <div className="w-[140px] h-[30px]">
              <Skeleton className="w-full h-full" />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-x-3">
            <Skeleton className="w-full h-[300px]" />
            <Skeleton className="w-full h-[300px]" />
            <Skeleton className="w-full h-[300px]" />
            <Skeleton className="w-full h-[300px]" />
            <Skeleton className="w-full h-[300px]" />
          </div>
        </div>
      ) : (
        <div>
          <Slidemovie
            title="Similar"
            movies_data={movies_data_detail.id_movie_similar_main_movie}
            url="similar"
          ></Slidemovie>
        </div>
      )}
    </div>
  );
};

export default Detail;
