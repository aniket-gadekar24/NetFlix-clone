import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MainContainer from './MainContainer'
import MovieContainer from './MovieContainer'
import {useNowPlayingMovie} from "../hooks/useNowPlayingMovie"
import usePopularMovie from "../hooks/usePopularMovie"
import useUpcomingMovie from '../hooks/useUpcomingMovie'
import UseTopRatedeMovie from '../hooks/UseTopRatedeMovie'
import SearchMovie from './SearchMovie'



function Browse() {
    const user = useSelector(store=>store.app.user)
    const toggle = useSelector(store=>store.movie.toggle)
    const navigate = useNavigate();
    const dispatch = useDispatch ();

    // useEffect(()=> {
    //   if(!user){
    //     navigate("/")
    //   }
    // },[])


    // my custom hooks 
    useNowPlayingMovie();  
    usePopularMovie();
    UseTopRatedeMovie();
    useUpcomingMovie();
    
    useEffect(()=>{
    
    },[])

  return (
    <div>
      <Header/>
      <div>
        {
          toggle ? <SearchMovie/> : (
              <>
              <MainContainer/>
              <MovieContainer/>
              </>)  
        }
        
        
      </div>
    </div>
  )
}

export default Browse
