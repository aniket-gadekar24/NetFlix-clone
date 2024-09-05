import React from 'react'
import VideoTitile from './VideoTitile'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

function MainContainer() {
    const movie = useSelector(store=> store.movie?.nowPlyaingMovie);
    //console.log(movie)
    if(!movie) return // early return in react 

    const {overview ,id ,title} = movie[4];
  return (
    <div>
      <VideoTitile title={title} overview={overview}/>
      <VideoBackground movieId={id}/>
      
    </div>
  )
}

export default MainContainer
