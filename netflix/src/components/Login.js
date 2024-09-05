import React, { useState } from 'react'
import Header from './Header'
import axios from "axios"
import { API_END_POINT } from '../utils/constant';
import toast from 'react-hot-toast';
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../redux/userSlice';




function Login() {
  const [isLogin , setIsLogin] = useState(false);
  const [ fullName , setFullName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const isLoading = useSelector(store=>store.app.isLoading);

 


  const loginHandler =()=>{
    setIsLogin(!isLogin)
  }

  const inputhandler = async(e) =>{
    e.preventDefault()
    dispatch(setLoading(true))
      if(isLogin){
          // login
          const user = {email,password}
          try{
              // const res = await axios.post(`${API_END_POINT}/login` , user,{
              //   headers :{
              //     "content-Type" : "application/json"
              //   },
              //   withCredentials : true
              // })

              const res = await axios.post(`${API_END_POINT}/login`, user,{
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });
                  
              console.log(res)
              if (res.data.success){
                toast.success(res.data.message)
              }
              //dispatch(setUser(res.data.user));
              navigate("/browse")
          }catch (error){
              toast.error(error.response.data.message)
              console.log(error)
          }finally{
            dispatch(setLoading(false))
          }
      }else {
          // registerX
          dispatch(setLoading(true))
          const user = {fullName ,email,password}
          try{
            const res = await axios.post(`${API_END_POINT}/register`,user,{
              headers :{
                "content-Type" : "application/json"
              },
              withCredentials : true
            })
            console.log(isLogin)
            if (res.data.success){
              toast.success(res.data.message)
            }
            setIsLogin(true)
        }catch(error){
           // toast.error(error.response.data.message)
            console.log(error)
    
        }finally{
          dispatch(setLoading(false))
        }
      }
    
  
      // setFullName("")
      // setEmail("")
      // setPassword("")
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img className=' w-[100vw] h-[100vh] ' src='https://gtwallpaper.org/sites/default/files/wallpaper/246844/netflix-background-246844-2224648-4918717.png' alt='Background-image'/>
      </div>

      <form onSubmit={inputhandler} className='flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-center  absolute bg-black opacity-90'>
          
            <h1 className='text-white text-3xl mb-5 font-bold'>{isLogin ? "Login" : "Signup"}</h1>

            <div className='flex flex-col mx-12' >
              {
                !isLogin && <input value={fullName} placeholder='Full Name' type='text' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' onChange={(e)=>{setFullName(e.target.value)}}></input>
              }
                
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' type='email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'></input>
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' type='password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'></input>
                <button className='bg-red-600 mt-6 p-3 mb-3 text-white rounded-sm font-medium  '>{`${isLoading ? "Loading..." : (isLogin ? "Login" : "Signup")}`}</button>
                <p className='text-white'>{isLogin ? "New To NetFlix ?" : "Already have An Account ?"}</p><span onClick={loginHandler} className='text-blue-900 font-medium cursor-pointer'>{isLogin ? "Signup" :"Login"}</span>
            </div>
          
      </form>

    </div>
  )
}

export default Login
