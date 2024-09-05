import {createSlice} from "@reduxjs/toolkit"

const movieSlice = createSlice ({
    name : "movie",
    initialState : {
        nowPlyaingMovie : null,
        popularMovie : null,
        topRatedMovie : null,
        upcomingMovie : null,
        toggle : false,
        trailerMovie : null,
        open:false,
        id:"",
    },
    reducers :{
        // actions 
        getNowPlayingMovie: (state,action)=>{
            state.nowPlyaingMovie = action.payload
        },
        getPopularMovie : (state,action ) =>{
            state.popularMovie = action.payload
        },
        getTopRatedMovie: (state,action )=>{
            state.topRatedMovie = action.payload
        },
        getUpcomingMovie :(state,action) =>{
            state.upcomingMovie = action.payload
        },
        setToggle :(state) =>{
            state.toggle =!state.toggle
        },
        getTrailerMovie :(state,action) =>{
            state.trailerMovie = action.payload
        },
        setOpen:(state,action)=>{
            state.open = action.payload
        },
        setId:(state,action)=>{
            state.id = action.payload
        }
    }
})

export const {getNowPlayingMovie , getPopularMovie ,getTopRatedMovie, getUpcomingMovie, setToggle,getTrailerMovie,setOpen,setId}   = movieSlice.actions;
export default movieSlice.reducer
