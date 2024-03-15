import { createSlice } from "@reduxjs/toolkit";

const movieDetails = createSlice({
  name: "movieDetails",
  initialState: {
    id: null,
    show: false,
    reviews: null,
    videos: null,
    cast: null,
    recommendations: null,
    images:null
  },
  reducers: {
    setMovieId: (state, action) => {
      console.log(action.payload.id);
      const { id } = action.payload;
      state.id = id;
    },
    toggleShow: (state, action) => {
      state.show = !state.show;
    },
    addMovieCredits: (state, action) => {
      state.cast = action.payload;
    },
    addMovieReviews: (state, action) => {
      state.reviews = action.payload;
    },
    addMovieRecommendation: (state, action) => {
      state.recommendations = action.payload;
    },
    addMovieImages: (state,action)=>{
      state.images= action.payload
    }
  },
});

export const {
  addMovieCredits,
  setMovieId,
  addMovieReviews,
  toggleShow,
  addMovieRecommendation,
  addMovieImages
} = movieDetails.actions;
export default movieDetails.reducer;
