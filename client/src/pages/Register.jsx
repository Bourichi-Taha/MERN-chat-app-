import React, { useEffect, useRef, useState } from 'react'
import axios from "../api/Axios";
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import '../assets/css/login.css';
import logo from "../assets/images/logo.png";



const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const userRef = useRef();
  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post("/user", { username, password });
    console.log(res)
  }
  //setting focus on componenets load
  useEffect(() => {
    userRef.current.focus();
  }, [])
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  let content = (
    <div className="login-container">
      <div className="image-container">
        <img src={logo} alt="" className='login-logo' />
      </div>
      <div className="login-box">
        <form onSubmit={submitHandler} className='login-box-form'>
          <p></p>
          <p>Register your account!</p>
          <TextField ref={userRef} type='text' label="username" variant="outlined" value={username} onChange={handleUsernameChange} />
          <TextField type='password' label="password" variant="outlined" value={password} onChange={handlePasswordChange} />
          <Button type='submit' variant="outlined" color="secondary">Register</Button>
          <p>already have an account? <Link to={"/login"}>Login</Link></p>
        </form>
      </div>
    </div>
  )
  return content;
}

export default Register