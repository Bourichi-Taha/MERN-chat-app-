import React, { useEffect } from 'react'
import { useSendLogoutMutation } from '../features/auth/authApiSlice'
import {  useNavigate } from 'react-router-dom';

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
    <div>
      home
      <button onClick={clickHandler}>logout</button>
    </div>
  )
}

export default Home