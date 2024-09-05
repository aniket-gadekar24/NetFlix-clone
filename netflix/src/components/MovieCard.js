import React from 'react'
import { TMDB_IMG_URL } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { setOpen, setId} from '../redux/movieSlice';

function MovieCard({posterPath,movieId}) {
    const dispatch = useDispatch();

    if(posterPath == null) return null;

    const handleOpen = () =>{
      dispatch(setId(movieId))
      dispatch(setOpen(true))
    }

  return (
    <div className='w-48 pr-2' onClick={handleOpen}>
        <img src={`${TMDB_IMG_URL}/${posterPath}`} alt='movie-banner'/>
    </div>
  )
}

export default MovieCard

// {`${TMDB_IMG_URL}/${posterPath}`}

// "https://source.boomplaymusic.com/buzzgroup1/M00/32/AE/rBEevGHXumKAKqbrAAGqmG-A7hY70.jpeg"