import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const getmovies = createAsyncThunk(
  "movie/getmovies",
  async (movieData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {

      const result = await fetch(`https://api.themoviedb.org/3/movie/${movieData.moviepopular}?api_key=6a9ddc3df7630d56986815607058bfec&language=en-US&page=${movieData.page}`);
      
    const data = await result.json();
  
      return data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getmovie = createAsyncThunk(
  "movie/getmovie",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      
      const result = await fetch(`
      
https://api.themoviedb.org/3/movie/${item}?api_key=6a9ddc3df7630d56986815607058bfec&language=en-US`, {
        method: "GET",
        headers: { "content-type": "application/json;charset=UTF-8" },
      });

      const data = await result.json();
      
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
// movie/getmovies is the type of slice  we should put slice name which is "movie " and getmovies is
const movieslice = createSlice({
  name: "movie",
  initialState: { movie: [], isLoading: false, error: null, movieInfo: [] },
  extraReducers: {
    
    [getmovies.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getmovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    },
    [getmovies.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getmovie.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getmovie.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movieInfo = action.payload;
    },
  },
});
export default movieslice.reducer;
