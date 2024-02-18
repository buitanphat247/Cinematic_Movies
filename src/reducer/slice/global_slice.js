import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies_query: "",
  current_page: 1,
  similar_id: "",
  movies: {},
  movies_filter: {},
};

export const globalSlice = createSlice({
  name: "global_slice",
  initialState,
  reducers: {
    setMoviesQuery: (state, action) => {
      state.movies_query = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.current_page = action.payload;
    },
    setSimilarId: (state, action) => {
      state.similar_id = action.payload;
    },
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setMoviesFilter: (state, action) => {
      console.log(action.payload);
      state.movies_filter = action.payload;
    },
  },
});

export const {
  setMoviesQuery,
  setCurrentPage,
  setSimilarId,
  setMovies,
  setMoviesFilter,
} = globalSlice.actions;
export default globalSlice.reducer;
