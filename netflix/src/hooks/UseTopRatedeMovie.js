import { useDispatch } from "react-redux"
import axios from "axios"
import { options, Top_Rated_movie } from "../utils/constant";
import { getTopRatedMovie } from "../redux/movieSlice";


export const  UseTopRatedeMovie = async () =>{
    const dispatch  = useDispatch();
    try{
        const res =  await axios.get(Top_Rated_movie,options)
        dispatch(getTopRatedMovie(res.data.results  ))
    }catch (error){
        console.log(error)
    }
  
}

export default UseTopRatedeMovie
