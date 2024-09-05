import axios from "axios"
import { getNowPlayingMovie } from "../redux/movieSlice";
import {Now_Playing_Movie,options} from "../utils/constant"
import {useDispatch} from "react-redux"


export const useNowPlayingMovie = async () =>{
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Now_Playing_Movie,options)
        // console.log(res)
        dispatch(getNowPlayingMovie(res.data.results));
    }catch (error){
        console.log(error)
    }
  }

export default useNowPlayingMovie ;