import { configureStore } from "@reduxjs/toolkit";
import movies from "./movieSlice";
import auth from "./authSlice";
export default configureStore({
  reducer: {
    movies,
    auth,
  },
});
