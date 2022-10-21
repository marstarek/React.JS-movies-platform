import { configureStore } from "@reduxjs/toolkit";
import movies from "./movieSlice";
export default configureStore({
  reducer: {
    movies,
  
  },
});
