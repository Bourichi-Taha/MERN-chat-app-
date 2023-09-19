import React, { useEffect } from 'react'
import { useSendLogoutMutation } from '../features/auth/authApiSlice'
import {  Outlet, useNavigate } from 'react-router-dom';
import "../assets/css/style.css"
import Sidebar from '../components/Sidebar';
const Home = () => {
  const navigate = useNavigate();
  const [sendLogout,{isSuccess}] = useSendLogoutMutation();
  useEffect(()=>{
    if (isSuccess) {
      navigate("/login");
    }
  },[isSuccess,navigate])
  const clickHandler = () => sendLogout()
  return (
    <div className='home-container'>
      
      <Sidebar />
      {/* <ChatArea /> */}
      {/* <Welcome /> */}
      {/* <CreateGroups/> */}
      {/* <OnlineUsers />  */}
      <Outlet/>
    </div>
  )
}

export default Home