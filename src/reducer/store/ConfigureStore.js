import detail_slice from "../slice/detail_slice";
import global_slice from "../slice/global_slice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
  global: global_slice,
  detail: detail_slice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
