import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../features/auth/authApiSlice';
import { setCredentials } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import logo from "../assets/images/logo.png";
import "../assets/css/login.css";
import { Button, TextField } from '@mui/material';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const userRef = useRef();
    const errRef = useRef();
    const [errMesssage, setErrMessage] = useState('');
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();
    //setting focus on componenets load
    useEffect(() => {
        userRef.current.focus();
    }, [])
    //clearing error message
    useEffect(() => {
        setErrMessage('');
    }, [username, password])

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await login({ username, password }).unwrap();
            const { accessToken } = res;
            dispatch(setCredentials({ accessToken }));
            setUsername('');
            setPassword('');
            navigate('/home');
        } catch (error) {
            setErrMessage('Login failed');
            errRef.current.focus();
        }
    }
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleUsernameChange = (e) => setUsername(e.target.value);
    let content;
    if (isLoading) {
        content = <p>loading ...</p>

    } else {
        content = (
            <div className="login-container">
                <div className="image-container">
                    <img src={logo} alt="" className='login-logo' />
                </div>
                <div className="login-box">
                    <form onSubmit={submitHandler} className='login-box-form'>
                        <p ref={errRef} className="text-red-600 text-center font-semibold block w-full rounded-sm p-2 mb-2 ">{errMesssage}</p>
                        <p>Login to your account!</p>
                        <TextField ref={userRef} type='text' label="username" variant="outlined" value={username} onChange={handleUsernameChange} />
                        <TextField type='password' label="password" variant="outlined" value={password} onChange={handlePasswordChange} />
                        <Button type='submit' variant="outlined" color="secondary">Login</Button>
                        <p>don't have an account? <Link to={"/register"}>Register</Link></p>
                    </form>
                </div>
            </div>
        )
    }
    

    return content;
}

export default Login