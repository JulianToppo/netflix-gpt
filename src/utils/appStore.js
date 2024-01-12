import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice"
const appStore = configureStore({
  reducer: {
    userSlice:userReducer,
    moviesSlice:moviesReducer,
  }
});

export default appStore;
