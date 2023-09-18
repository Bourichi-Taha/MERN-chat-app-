import React from 'react'
import "../assets/css/style.css";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { IconButton } from '@mui/material';
import ConversationAvatar from './ConversationAvatar';

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className="sb-header">
                <IconButton>
                    <AccountCircleOutlinedIcon />
                </IconButton>
                <div className="">
                    <IconButton>
                        <PersonAddAltOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <GroupAddOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AddCircleOutlineOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <DarkModeOutlinedIcon />
                    </IconButton>

                </div>
            </div>
            <div className="sb-search">
                <IconButton>
                    <SearchOutlinedIcon />
                </IconButton>
                <input placeholder='Search here ...' type="text" className="sb-search-input" />
            </div>
            <div className="sb-conversations">
                <ConversationAvatar />
                <ConversationAvatar />
                <ConversationAvatar />
                <ConversationAvatar />
            </div>
        </div>
    )
}

export default Sidebar