import React, { useEffect, useState } from 'react'
import "../assets/css/style.css";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { IconButton } from '@mui/material';
import MessageOther from './MessageOther';
import MessageSelf from './MessageSelf';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/auth/authSlice';
import { useCreateMessageMutation, useGetMessagesQuery } from '../features/message/messageApiSlice'
import { useParams } from 'react-router-dom';
import { useGetChatQuery } from '../features/chat/chatApiSlice';
const ChatArea = () => {
  const chatId = useParams().id;
  const { data: chat } = useGetChatQuery({ chatId });
  const user = useSelector(selectCurrentUser);
  const { data, isLoading } = useGetMessagesQuery(chatId);
  const [createMessage] = useCreateMessageMutation();
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const sendMessage = async (e) => {
    e.preventDefault();
    const messageObject = {
      content : currentMessage,
      type : 'text',
      chat:chatId,
    };
    await createMessage(messageObject);
    setCurrentMessage('');
  }
  useEffect(() => {
    if (!isLoading) {
      setMessages(data);
    }
  }, [chatId, isLoading,data]);
  const messageArea = () => {
    return (
      <div className="ca-input-area">
              <input type="text" placeholder='Type a message ...' value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} className='sb-search-input' />
              <IconButton onClick={sendMessage}>
                <SendIcon />
              </IconButton>
              <IconButton>
                <AttachFileIcon />
              </IconButton>
            </div>
    )
  }
  const render = () => {
    if (chat && messages) {
      const otherMember = chat?.members.find(member => member._id !== user._id);
      if (chat.isGroupChat) {
        return (
          <div className='chatArea-container'>
            <div className="ca-header">
              <p className="con-icon">{chat.name[0]}</p>
              <div className="ca-header-text">
                <p className="con-title">{chat.name}</p>
                <p className="con-lastMessage">Online</p>
              </div>
              <IconButton>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </div>
            <div className="ca-body">
              {
                messages.map((msg, index) => {
                  if (msg.sender === user._id) {
                    return (
                      <MessageSelf key={index} message={msg} />
                    )
                  }
                  return (
                    <MessageOther key={index} message={msg} />
                  )
                })
              }
            </div>
            {messageArea()}
          </div>
        )
      }
      return (
        <div className='chatArea-container'>
          <div className="ca-header">
            <p className="con-icon">{otherMember.username[0]}</p>
            <div className="ca-header-text">
              <p className="con-title">{otherMember.username}</p>
              <p className="con-lastMessage">Online</p>
            </div>
            <IconButton>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </div>
          <div className="ca-body">
            {
              messages.map((msg, index) => {
                if (msg.sender === user._id) {
                  return (
                    <MessageSelf key={index} message={msg} />
                  )
                }
                return (
                  <MessageOther key={index} message={msg} />
                )
              })
            }
          </div>
          {messageArea()}
        </div>
      )
    }
  }
  return render();
}

export default ChatArea