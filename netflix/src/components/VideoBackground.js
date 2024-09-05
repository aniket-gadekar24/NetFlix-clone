import React from 'react'
import useMovieId from '../hooks/useMovieId'
import { useSelector } from 'react-redux'

function VideoBackground({movieId,bool}) {
    const trailerMovie = useSelector(store=>store.movie.trailerMovie)
    // console.log(trailerMovie)
    useMovieId( movieId)
    // console.log(bool)
 
  return (
    <div className='w-[vw] overflow-hidden'>
        <iframe className={`${bool ? "w-[100%]" :"w-screen aspect-video"}`}
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=ebp7NOymuFJhpSD7&autoplay=1&mute=1`}
        title="YouTube video player" 
        frameborder="0"  
        allowfullscreen></iframe>
    </div>
  )
}

export default VideoBackground
// trailerMovie.key