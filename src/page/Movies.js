import React, { useEffect, useState } from "react";
import Cardmovie from "../block/Cardmovie";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { debounce } from "lodash";
import { useSelector } from "react-redux";
import { setCurrentPage } from "../reducer/slice/global_slice";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams } from "react-router-dom";
import Filterfilm from "../block/Filterfilm";
const Movies = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  // dùng lưu trữ các dữ liệu khi tải trang
  const [movies, setMovies] = useState([]);
  // dùng load ra bộ lọc ngôn ngữ, quốc gia, thể loại
  const data_movies = useSelector((state) => state.global.movies);
  // dùng để lưu trữ tổng số trang
  const [totalPage, setTotalPage] = useState(1);
  // dùng load ra từ khóa tìm kiếm
  const MoviesQuery = useSelector((state) => state.global.movies_query);
  // dùng load ra trang hiện tại
  const CurrentPage = useSelector((state) => state.global.current_page);
  // load ra id phim tương đồng muốn tìm kiếm giống bộ có cùng với id này
  const MoviesSimilarId = useSelector((state) => state.global.similar_id);
  const [isLoading, setIsLoading] = useState(true);
  // hàm xử lí sự kiện thay đổi trang
  const handlePageChange = ({ selected }) => {
    dispatch(setCurrentPage(selected + 1));
  };
  const QueryFilterMovies = useSelector((state) => state.global.movies_filter);
  useEffect(() => {
    const query_movies = async () => {
      setIsLoading(true);
      setTimeout(async () => {
        let options;
        if (Object.keys(QueryFilterMovies).length === 0) {
          if (MoviesQuery === "") {
            if (slug === "upcoming") {
              options = {
                method: "GET",
                url: "https://api.themoviedb.org/3/movie/upcoming",
                params: { language: "en-US", page: CurrentPage },
                headers: {
                  accept: "application/json",
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzRmOWRhZTViZTRjZGJlNGZjZGU3YzAyMjM4ZDA5NyIsInN1YiI6IjY0ZDg3ZTY1YjZjMjY0MTE1NWYxY2RhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VQQrURB0BKTjZBbt8nXrMZ5bRYaibMrouEyFEDEiIns",
                },
              };
            } else if (slug === "popular") {
              options = {
                method: "GET",
                url: "https://api.themoviedb.org/3/movie/popular",
                params: { language: "en-US", page: CurrentPage },
                headers: {
                  accept: "application/json",
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzRmOWRhZTViZTRjZGJlNGZjZGU3YzAyMjM4ZDA5NyIsInN1YiI6IjY0ZDg3ZTY1YjZjMjY0MTE1NWYxY2RhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VQQrURB0BKTjZBbt8nXrMZ5bRYaibMrouEyFEDEiIns",
                },
              };
            } else if (slug === "now_playing") {
              options = {
                method: "GET",
                url: "https://api.themoviedb.org/3/movie/now_playing",
                params: { language: "en-US", page: CurrentPage },
                headers: {
                  accept: "application/json",
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzRmOWRhZTViZTRjZGJlNGZjZGU3YzAyMjM4ZDA5NyIsInN1YiI6IjY0ZDg3ZTY1YjZjMjY0MTE1NWYxY2RhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VQQrURB0BKTjZBbt8nXrMZ5bRYaibMrouEyFEDEiIns",
                },
              };
            } else if (slug === "top_rated") {
              options = {
                method: "GET",
                url: "https://api.themoviedb.org/3/movie/top_rated",
                params: { language: "en-US", page: CurrentPage },
                headers: {
                  accept: "application/json",
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzRmOWRhZTViZTRjZGJlNGZjZGU3YzAyMjM4ZDA5NyIsInN1YiI6IjY0ZDg3ZTY1YjZjMjY0MTE1NWYxY2RhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VQQrURB0BKTjZBbt8nXrMZ5bRYaibMrouEyFEDEiIns",
                },
              };
            } else if (slug === "similar") {
              options = {
                method: "GET",
                url: `https://api.themoviedb.org/3/movie/${MoviesSimilarId}/similar`,
                params: { language: "en-US", page: CurrentPage },
                headers: {
                  accept: "application/json",
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzRmOWRhZTViZTRjZGJlNGZjZGU3YzAyMjM4ZDA5NyIsInN1YiI6IjY0ZDg3ZTY1YjZjMjY0MTE1NWYxY2RhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VQQrURB0BKTjZBbt8nXrMZ5bRYaibMrouEyFEDEiIns",
                },
              };
            } else {
              options = {
                method: "GET",
                url: "https://api.themoviedb.org/3/discover/movie",
                params: {
                  include_adult: "false",
                  include_video: "false",
                  language: "en-US",
                  page: CurrentPage,
                  sort_by: "popularity.desc",
                },
                headers: {
                  accept: "application/json",
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzRmOWRhZTViZTRjZGJlNGZjZGU3YzAyMjM4ZDA5NyIsInN1YiI6IjY0ZDg3ZTY1YjZjMjY0MTE1NWYxY2RhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VQQrURB0BKTjZBbt8nXrMZ5bRYaibMrouEyFEDEiIns",
                },
              };
            }
          } else {
            options = {
              method: "GET",
              url: "https://api.themoviedb.org/3/search/movie",
              params: {
                query: MoviesQuery,
                include_adult: "false",
                language: "en-US",
                page: CurrentPage,
              },
              headers: {
                accept: "application/json",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzRmOWRhZTViZTRjZGJlNGZjZGU3YzAyMjM4ZDA5NyIsInN1YiI6IjY0ZDg3ZTY1YjZjMjY0MTE1NWYxY2RhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VQQrURB0BKTjZBbt8nXrMZ5bRYaibMrouEyFEDEiIns",
              },
            };
          }
        } else {
          options = {
            method: "GET",
            url: "https://api.themoviedb.org/3/discover/movie",
            params: {
              include_adult: "false",
              include_video: "false",
              language: "en-US",
              page: CurrentPage,
              sort_by: "popularity.desc",
              with_genres: QueryFilterMovies.type_film,
            },
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzRmOWRhZTViZTRjZGJlNGZjZGU3YzAyMjM4ZDA5NyIsInN1YiI6IjY0ZDg3ZTY1YjZjMjY0MTE1NWYxY2RhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VQQrURB0BKTjZBbt8nXrMZ5bRYaibMrouEyFEDEiIns",
            },
          };
        }
        try {
          const response = await axios.request(options);
          console.log(response.data);
          setMovies(response.data);
          setTotalPage(response.data.total_pages);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      }, 1500);
    };
    const debouncedQueryMovies = debounce(query_movies, 300);
    debouncedQueryMovies();
    return () => {
      debouncedQueryMovies.cancel();
    };
  }, [CurrentPage, MoviesQuery, MoviesSimilarId, QueryFilterMovies, slug]);

  return (
    <div className="flex flex-col gap-y-5 p-5">
      <h1 className="text-white font-bold uppercase text-2xl">
        <span>Movies - </span>
        <span>{slug || "ALL"}</span>
        {MoviesQuery !== "" && <span> - {MoviesQuery}</span>}
      </h1>
      <>
        {isLoading ? (
          <>
            <div className="flex  gap-x-2">
              <div className="h-[40px] w-[180px]">
                <Skeleton className="w-full min-h-full" />
              </div>
              <div className="h-[40px] w-[100px]">
                <Skeleton className="w-full min-h-full" />
              </div>
              <div className="h-[40px] w-[100px]">
                <Skeleton className="w-full min-h-full" />
              </div>
            </div>
          </>
        ) : (
          <>
            <Filterfilm
              data_movies_languages={data_movies?.languages}
              data_movies_countries={data_movies?.countries}
              data_movies_genres_genres={data_movies?.genres?.genres}
            ></Filterfilm>
          </>
        )}

        <div className="grid grid-cols-5 gap-3">
          {isLoading || !movies?.results
            ? new Array(20).fill("").map((item, index) => (
                <div className="h-[300px]" key={index}>
                  <Skeleton className="w-full h-full" />
                </div>
              ))
            : movies.results.map((item, index) => (
                <Cardmovie
                  key={index}
                  poster_path={item.poster_path}
                  title={item.title}
                  release_date={item.release_date}
                  id={item.id}
                ></Cardmovie>
              ))}
        </div>

        <ReactPaginate
          pageCount={totalPage}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
          forcePage={CurrentPage - 1}
        />
      </>
    </div>
  );
};

export default Movies;
