export  const API_END_POINT = "http://localhost:8080/api/v1/user"


export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzliYTkzMGNiYjg3MzE4Mjg0MTJjMzcwMWI2OWFjNSIsIm5iZiI6MTcyNTExMDg3NC42OTg0NzQsInN1YiI6IjY2ZDMxNmNjYzE4YmNiMjUyZjAwNTBkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mn0Kkeq5oZyhM-aaqL1_QIVEVluGBMaGsXWo5bOssF0'
    }
  }


export const  Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing";
export const  Popular_movie = "https://api.themoviedb.org/3/movie/popular"
export const Top_Rated_movie = "https://api.themoviedb.org/3/movie/top_rated"
export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming"

export const TMDB_IMG_URL ="https://image.tmdb.org/t/p/w500"

export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?query="