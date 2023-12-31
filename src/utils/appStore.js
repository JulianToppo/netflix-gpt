import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const appStore = configureStore({
  reducer: {userSlice,
  }

});

export default appStore;
