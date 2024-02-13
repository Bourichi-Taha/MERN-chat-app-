import React from 'react'
import '../assets/css/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedChat } from "../features/chat/chatSlice";
import { selectCurrentUser } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';



const ConversationAvatar = ({ chat }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const otherMember = chat.members.find(member => member._id !== user._id);
  const clickHandler = () => {
    dispatch(setSelectedChat(chat));
    navigate(`/chat/${chat._id}`);
  }
  const render = () => {
    if (chat.isGroupChat) {
      return (
        <div className="conversation-container" onClick={clickHandler}>
          <p className="con-icon">{chat.name[0]}</p>
          <p className="con-title">{chat.name}</p>
          <p className="con-lastMessage">hiii</p>
          <p className="con-timeStamp">2h ago</p>
        </div>
      )
    }
    return (
      <div className="conversation-container" onClick={clickHandler}>
        <p className="con-icon">{otherMember.username[0]}</p>
        <p className="con-title">{otherMember.username}</p>
        <p className="con-lastMessage">hiii</p>
        <p className="con-timeStamp">2h ago</p>
      </div>
    )
  }
  return render();
}

export default ConversationAvatar