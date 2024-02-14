import React from 'react'
import "../assets/css/style.css";
import { IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import logo from "../assets/images/logo.png";
import FriendItem from './partials/FriendItem';
import { useGetUsersQuery } from '../features/user/userApiSlice';
import Skeleton from '@mui/material/Skeleton';

const AddFriends = () => {
    const { data: users, isLoading } = useGetUsersQuery();
    const render = () => {
        if (isLoading) {
            return (
                <>
                    <Skeleton variant="rounded" width={"100%"} height={72} style={{marginBottom:4}} />
                    <Skeleton variant="rounded" width={"100%"} height={72} style={{marginBottom:4}}/>
                    <Skeleton variant="rounded" width={"100%"} height={72} style={{marginBottom:4}}/>
                    <Skeleton variant="rounded" width={"100%"} height={72} style={{marginBottom:4}}/>
                    <Skeleton variant="rounded" width={"100%"} height={72} style={{marginBottom:4}}/>
                    <Skeleton variant="rounded" width={"100%"} height={72} />
                </>
            )
        }
        return users.map((user, index) => {
            return (
                <FriendItem key={index} user={user} />
            )
        });
    }
    return (
        <div className="online-users-container">
            <div className=" online-users-header">
                <img src={logo} alt="" style={{ height: "48px", width: "48px", marginRight: "10px" }} />
                Add Friends
            </div>
            <div className="sb-search">
                <IconButton>
                    <SearchOutlinedIcon />
                </IconButton>
                <input type="text" placeholder='Search here ...' className='sb-search-input' />
            </div>
            <ul className="ou-list">
                {
                    render()
                }
            </ul>
        </div>
    )
}

export default AddFriends