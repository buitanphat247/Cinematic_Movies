import React from "react";
import Button from "../Components/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setMoviesFilter } from "../reducer/slice/global_slice";
import { useSelector } from "react-redux";

const Filterfilm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();
  const dispatch = useDispatch();
  const handleReset = (e) => {
    reset({
      type_film: "",
    });
    dispatch(setMoviesFilter({}));
  };
  const Submit_filter = (data) => {
    dispatch(setMoviesFilter(data));
  };
  const QueryFilterMovies = useSelector((state) => state.global.movies_filter);

  return (
    <>
      <form onSubmit={handleSubmit(Submit_filter)}>
        <div className="flex items-center gap-x-3">
          <select
            {...register("type_film")}
            defaultValue={QueryFilterMovies.type_film}
            className="outline-none border-none p-2 rounded-md"
          >
            <option value="">Chọn thể loại</option>
            {props.data_movies_genres_genres.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <Button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[#292f3b] h-[40px] px-3 text-white font-bold rounded-md outline-none ${
              isSubmitting ? "cursor-not-allowed" : ""
            }`}
          >
            Tìm kiếm
          </Button>
          <Button
            type="reset"
            onClick={handleReset}
            className="bg-[#292f3b] h-[40px] px-3 text-white font-bold rounded-md outline-none"
          >
            Reset Fill
          </Button>
        </div>
      </form>
    </>
  );
};

export default Filterfilm;
