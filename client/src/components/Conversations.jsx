import React from 'react'
import "../assets/css/style.css";
import { IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ConversationAvatar from './ConversationAvatar';
import logo from "../assets/images/logo.png";


const Conversations = () => {
    return (
        <div className="online-users-container">
            <div className=" online-users-header">
                <img src={logo} alt="" style={{ height: "48px", width: "48px", marginRight: "10px" }} />
                Conversations
            </div>
            <div className="con-sb-search">
                <IconButton>
                    <SearchOutlinedIcon />
                </IconButton>
                <input type="text" placeholder='Search here ...' className='sb-search-input' />
            </div>
            <div className="con-sb-conversations">
                <ConversationAvatar />
                <ConversationAvatar />
                <ConversationAvatar />
                <ConversationAvatar />
            </div>
        </div>
    )
}

export default Conversations