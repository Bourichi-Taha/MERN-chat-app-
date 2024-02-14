import React from 'react'
import { selectCurrentUser } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';
import "../assets/css/style.css";
import { IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import logo from "../assets/images/logo.png";
import UserRequest from './partials/UserRequest';
const Requests = () => {
    const user = useSelector(selectCurrentUser);

    return (
        <div className="online-users-container">
            <div className=" online-users-header">
                <img src={logo} alt="" style={{ height: "48px", width: "48px", marginRight: "10px" }} />
                Requests
            </div>
            <div className="sb-search">
                <IconButton>
                    <SearchOutlinedIcon />
                </IconButton>
                <input type="text" placeholder='Search here ...' className='sb-search-input' />
            </div>
            <ul className="ou-list">
                {
                    user && user.requests.map((request, index) => {
                        return (
                            <UserRequest key={index} request={request} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Requests