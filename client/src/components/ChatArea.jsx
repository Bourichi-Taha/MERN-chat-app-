import React from 'react'
import "../assets/css/style.css";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
const ChatArea = () => {
  return (
    <div className='chatArea-container'>
      <div className="ca-header">
        <p className="con-icon">S</p>
        <div className="ca-header-text">
          <p className="con-title">Chat title</p>
          <p className="con-lastMessage">Online</p>
        </div>
        <IconButton>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </div>
      <div className="ca-body"></div>
      <div className="ca-input-area">
        <input type="text" placeholder='Type a message ...' className='sb-search-input' />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default ChatArea