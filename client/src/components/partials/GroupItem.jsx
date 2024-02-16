import React from 'react'
import Avatar from '@mui/material/Avatar';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import Tooltip from '@mui/material/Tooltip';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MessageIcon from '@mui/icons-material/Message';
import {  useLeaveGroupMutation } from '../../features/chat/chatApiSlice';
const GroupItem = ({ group }) => {
    const [leaveGroup] = useLeaveGroupMutation();
    const navigate = useNavigate();

    const handleQuit = async (e) => {
        e.preventDefault();
        await leaveGroup(group._id);
    }
    const handleChatStart = async (e) => {
        e.preventDefault();
        navigate(`/chat/${group._id}`);
    }
    return (
        <li className="ou-list-item">
            <div className="ou-list-item-left">
                <Avatar
                    alt={group.name}
                    className="ou-icon"
                />
                <p className="ou-title">{group.name}</p>
            </div>
            <div className="ou-list-item-right">
                <Tooltip title={'Quit this group!.'} >
                    <IconButton onClick={handleQuit}>
                        <PersonAddDisabledIcon color='error' />
                    </IconButton>
                </Tooltip>
                <Tooltip title={'Send a message!'} >
                    <IconButton onClick={handleChatStart}>
                        <MessageIcon />
                    </IconButton>
                </Tooltip>
            </div>
        </li>
    )
}

export default GroupItem