import React from 'react'
import "../../assets/css/style.css";
import { IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MessageIcon from '@mui/icons-material/Message';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../features/auth/authSlice';
import Tooltip from '@mui/material/Tooltip';
import { useCancelRequestMutation, useSendRequestMutation, useUnfriendUserMutation } from '../../features/user/userApiSlice';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { useNavigate } from 'react-router-dom';
import { useCreateChatMutation } from '../../features/chat/chatApiSlice';

const FriendItem = ({ user }) => {
    const navigate = useNavigate()
    const loggedUser = useSelector(selectCurrentUser);
    const isRequested = user.requests.includes(loggedUser._id);
    const isFriend = user.friends.includes(loggedUser._id);
    const [sendRequest] = useSendRequestMutation();
    const [cancelRequest] = useCancelRequestMutation();
    const [unfriendUser] = useUnfriendUserMutation();
    const [createChat] = useCreateChatMutation();
    const handleSendRequest = async (e) => {
        e.preventDefault();
        await sendRequest(user._id);
    }
    const handleCancelRequest = async (e) => {
        e.preventDefault();
        await cancelRequest(user._id);
    }
    const handleUnfriendUser = async (e) => {
        e.preventDefault();
        await unfriendUser(user._id);
    }
    const handleChatStart = async (e) => {
        e.preventDefault();
        const res = await createChat({members:[user._id,loggedUser._id],isGroupChat:false});
        if (res.data && res.data._id) {
            navigate(`/chat/${res.data._id}`);
        }
    }
    return (
        <li className="ou-list-item">
            <div className="ou-list-item-left">
                <p className="ou-icon">{user.username[0]}</p>
                <p className="ou-title">{user.username}</p>
            </div>
            <div className="ou-list-item-right">
                {
                    !isFriend ? (isRequested ?
                        <Tooltip title={'Friend request already sent!'} >
                            <IconButton onClick={handleCancelRequest}>
                                <PersonRemoveIcon color='error'/>
                            </IconButton>
                        </Tooltip>
                        :
                        <Tooltip title={'Send a friend request.'} >
                            <IconButton onClick={handleSendRequest}>
                                <PersonAddIcon />
                            </IconButton>
                        </Tooltip>
                    ) :
                        <Tooltip title={'Unfriend this User!.'} >
                            <IconButton onClick={handleUnfriendUser}>
                                <PersonAddDisabledIcon color='error' />
                            </IconButton>
                        </Tooltip>
                }
                {
                    isFriend &&
                    <Tooltip title={'Send a message!'} >
                        <IconButton onClick={handleChatStart}>
                            <MessageIcon />
                        </IconButton>
                    </Tooltip>
                }
            </div>
        </li>
    )
}

export default FriendItem