import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import movieDetailsSlice from "./movieDetailsSlice";
const appStore = configureStore({
  reducer: {
    userSlice:userReducer,
    moviesSlice:moviesReducer,
    gptSlice:gptReducer,
    movieDetailsSlice:movieDetailsSlice
  }
});

export default appStore;
