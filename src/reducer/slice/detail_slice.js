import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies_detail: [],
};
export const detail_slice = createSlice({
  name: "detail_slice",
  initialState,
  reducers: {
    setMoviesDetail: (state, action) => {
      state.movies_detail = action.payload;
    },
  },
});
export const { setMoviesDetail } = detail_slice.actions;
export default detail_slice.reducer;
