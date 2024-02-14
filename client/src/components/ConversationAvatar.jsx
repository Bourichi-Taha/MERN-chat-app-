import React from 'react'
import '../assets/css/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedChat } from "../features/chat/chatSlice";
import { selectCurrentUser } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { baseUrl } from '../app/api/apiSlice';


const ConversationAvatar = ({ chat }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const otherMember = chat.members.find(member => member._id !== user._id);
  const clickHandler = () => {
    dispatch(setSelectedChat(chat));
    document.querySelectorAll(`.conversation-container`)?.forEach((item) => item.classList.remove('active'));
    document.querySelector(`.f${chat._id}`).classList.add('active');
    navigate(`/chat/${chat._id}`);
  }
  const render = () => {
    if (chat.isGroupChat) {
      return (
        <div className={`conversation-container f${chat._id}`} onClick={clickHandler}>
          <Avatar
            alt={chat.name}
            src={baseUrl+'/'+chat?.chatUpload?.path}
            className="con-icon"
          />
          <p className="con-title">{chat.name}</p>
          <p className="con-lastMessage">hiii</p>
          <p className="con-timeStamp">2h ago</p>
        </div>
      )
    }
    return (
      <div className={`conversation-container f${chat._id}`} onClick={clickHandler}>
        <Avatar
          alt={otherMember.username}
          src={baseUrl+'/'+otherMember?.avatar?.path}
            className="con-icon"

        />
        <p className="con-title">{otherMember.username}</p>
        <p className="con-lastMessage">hiii</p>
        <p className="con-timeStamp">2h ago</p>
      </div>
    )
  }
  return render();
}

export default ConversationAvatar