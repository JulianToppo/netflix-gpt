import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice"
import gptReducer from "./gptSlice"
const appStore = configureStore({
  reducer: {
    userSlice:userReducer,
    moviesSlice:moviesReducer,
    gptSlice:gptReducer,
  }
});

export default appStore;
