import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../features/auth/authApiSlice';
import { setCredentials } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
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
    let content;
    if (isLoading) {
        content = <p>loading ...</p>
    } else {
        content = (
            <div className="bg-blue-50 h-screen flex items-center">
                <form className="w-64 mx-auto mb-12" onSubmit={submitHandler}>
                    <p ref={errRef} className="text-red-600 text-center font-semibold block w-full rounded-sm p-2 mb-2 ">{errMesssage}</p>
                    <input ref={userRef} value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder='username' className="block w-full rounded-sm p-2 mb-2 border" />
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='password' className="block w-full rounded-sm p-2 mb-2 border" />
                    <button type="submit" className="bg-blue-500 block text-white w-full rounded-sm p-2">Login</button>
                </form>
            </div>
        )
    }

    return content;
}

export default Login