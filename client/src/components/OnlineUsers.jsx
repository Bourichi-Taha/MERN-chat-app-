import React from 'react'
import "../assets/css/style.css";
import { IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import logo from "../assets/images/logo.png";
import { useGetUsersFriendsQuery } from '../features/user/userApiSlice';
import FriendItem from './partials/FriendItem';
const OnlineUsers = () => {
    const {data,isLoading} = useGetUsersFriendsQuery();
    return (
        <div className="online-users-container">
            <div className=" online-users-header">
                <img src={logo} alt="" style={{height:"48px",width:"48px",marginRight:"10px"}} />
                Online users
            </div>
            <div className="sb-search">
                <IconButton>
                    <SearchOutlinedIcon />
                </IconButton>
                <input type="text" placeholder='Search here ...' className='sb-search-input' />
            </div>
            <ul className="ou-list">
                {
                    !isLoading && data.map((friend,index)=>{
                        return(
                            <FriendItem user={friend} key={index}/>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default OnlineUsers