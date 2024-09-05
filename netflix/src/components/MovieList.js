import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title,movies, searchMovie=false}) {
    // const title =  props.title ;
    // const movies = props.movies
    // console.log(movies)
    console.log(movies.id)
  return (
    <div className='px-8'>
     
        <h1 className={`${searchMovie ? "text-black" :"text-white"} text-3xl py-3`}>{title}</h1>
        
        <div className="flex overflow-x-auto no-scrollbar cursor-pointer ">
            <div className='flex items-center'>
              {
                movies?.map((movie)=>{
                  return (
                    <MovieCard key={movie.id} posterPath={movie.poster_path} />
                  )
                })
              }
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </div>
        </div>
      
    </div>
  )
}

export default MovieList
