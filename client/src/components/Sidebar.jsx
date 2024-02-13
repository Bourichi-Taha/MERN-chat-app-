import React, { useEffect, useState } from 'react'
import "../assets/css/style.css";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import LightModeIcon from '@mui/icons-material/LightMode';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { IconButton, useMediaQuery } from '@mui/material';
import ConversationAvatar from './ConversationAvatar';
import { useNavigate } from 'react-router-dom';
import { useSendLogoutMutation } from '../features/auth/authApiSlice';
import { useGetChatsQuery } from '../features/chat/chatApiSlice';

const Sidebar = ({chats}) => {

    const navigate = useNavigate();
    const [sendLogout, { isSuccess }] = useSendLogoutMutation();
    const [isDark, setIsDark] = useState(false);
    const matches = useMediaQuery('(max-width:680px)');
    useEffect(() => {
        if (isSuccess) {
            navigate("/login");
        }
    }, [isSuccess, navigate])
    const clickHandler = () => sendLogout()
    return (
        <div className='sidebar-container'>
            <div className="sb-header">
                <IconButton onClick={() => { navigate("/") }}>
                    <AccountCircleOutlinedIcon />
                </IconButton>
                <div className="sb-header-icons">
                    {matches &&
                        <IconButton onClick={() => { navigate("conversations") }}>
                            <QuestionAnswerIcon />
                        </IconButton>
                    }
                    <IconButton onClick={() => { navigate("users") }}>
                        <PersonAddAltOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={() => { navigate("groups") }}>
                        <GroupAddOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={() => { navigate("addGroupe") }}>
                        <AddCircleOutlineOutlinedIcon />
                    </IconButton >
                    <IconButton onClick={() => { document.querySelector('body').classList.toggle('dark'); setIsDark(prev => !prev) }}>
                        {isDark ? <LightModeIcon /> : <DarkModeOutlinedIcon />}
                    </IconButton>
                    <IconButton onClick={clickHandler}>
                        <LogoutIcon />
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
                {
                       chats.map((chat,index)=>{
                        return(
                            <ConversationAvatar key={index} chat={chat} />
                        )
                       }) 
                }
            </div>
        </div>
    )
}

export default Sidebar