import axios from 'axios';
import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { API_END_POINT } from '../utils/constant';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { setToggle } from '../redux/movieSlice';



function Header() {
  // const user = useSelector((store)=>store.app.user)  {user.fullName}

  const toggle = useSelector(store=>store.movie.toggle)
  const dispatch = useDispatch ();
  const navigate = useNavigate()

  const logouHandler = async() =>{
    alert("User logout successfully...")
      try{
          const res = await axios.get(`${API_END_POINT}/logout`);
          // console.log(res)
          if(res.data.success){
            toast.success(res.data.message)
          }
          dispatch(setUser(null))
          navigate("/")
      }catch(error){
        console.log(error)
      }
  }

  const toggleHandler = ()=>{
      dispatch(setToggle())
  }

  return (
    <div className='absolute z-10 flex w-[100%] items-center justify-between px-10 bg-gradient-to-b from-black'>
       <div>
        <img className='w-56' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png' alt='netflix-logo'/>
        <h1 className='text-lg font-bold text-white'>Developed By Aniket Gadekar</h1>
        </div>
        
        <div className='flex items-center'>
            <IoIosArrowDropdown size="24px" color='white' />
            <h1 className='text-lg font-bold text-white ' >Aniket Gadekar</h1> 
            <div className='ml-4'>
            <button onClick={logouHandler} className='bg-red-800 text-white px-4 py-2 rounded-md '>Logout</button>
            <button onClick={toggleHandler} className='bg-red-800 text-white px-4 py-2 ml-2 rounded-md '>{toggle ? "Home" : "Search Movie" }</button>
            </div>
        </div>
    </div>
  )
}

export default Header
