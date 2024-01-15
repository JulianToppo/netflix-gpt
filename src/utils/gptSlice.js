
import { createSlice } from "@reduxjs/toolkit";

const gptSlice= createSlice({
    name:'gpt',
    initialState:{
        showGptPage:false,
        movieRecommendation:null,
        gptQuery:null,
        movieMatchesFromTMBD:null,

    },
    reducers:{
        toggleShowGptPage:(state)=>{
            state.showGptPage=!state.showGptPage;
        },
        addMovieRecommendation:(state,action)=>{
            state.movieRecommendation=action.payload;
        },
        addGptQuery:(state,action)=>{
            state.gptQuery=action.payload;
        },
        addMovieMatches:(state,action)=>{
            state.movieMatchesFromTMBD=action.payload;
        },
        
    }
})

export const {toggleShowGptPage,addMovieRecommendation,addGptQuery,addMovieMatches} = gptSlice.actions;

export default  gptSlice.reducer;