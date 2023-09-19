import React from 'react';
import "../assets/css/style.css";
import { IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import logo from "../assets/images/logo.png";

const AvailableGroups = () => {
    return (
        <div className="online-users-container">
            <div className=" online-users-header">
                <img src={logo} alt="" style={{ height: "48px", width: "48px", marginRight: "10px" }} />
                Groups
            </div>
            <div className="sb-search">
                <IconButton>
                    <SearchOutlinedIcon />
                </IconButton>
                <input type="text" placeholder='Search here ...' className='sb-search-input' />
            </div>
            <ul className="ou-list">
                <li className="ou-list-item">
                    <p className="ou-icon">H</p>
                    <p className="ou-title">Hello</p>
                </li>
                <li className="ou-list-item">
                    <p className="ou-icon">H</p>
                    <p className="ou-title">Hello</p>
                </li>
                <li className="ou-list-item">
                    <p className="ou-icon">H</p>
                    <p className="ou-title">Hello</p>
                </li>

            </ul>
        </div>
    )
}

export default AvailableGroups