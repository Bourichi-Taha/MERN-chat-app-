import React, { useState } from 'react'
import axios from "../api/Axios";
const Register = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const submitHandler = async(e) => {
        e.preventDefault();
        const res = await axios.post("/user",{username,password});
        console.log(res) 
    }
  return (
    <div className="bg-blue-50 h-screen flex items-center">
        <form className="w-64 mx-auto mb-12" onSubmit={submitHandler}>
            <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder='username' className="block w-full rounded-sm p-2 mb-2 border" />
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='password' className="block w-full rounded-sm p-2 mb-2 border" />
            <button type="submit" className="bg-blue-500 block text-white w-full rounded-sm p-2">Register</button>
        </form>
    </div>
  )
}

export default Register