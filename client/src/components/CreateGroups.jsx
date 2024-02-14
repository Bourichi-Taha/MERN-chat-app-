import React, { useState } from 'react'
import "../assets/css/style.css"
import {   IconButton } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';
import logo from "../assets/images/logo.png";
import { selectCurrentUser } from '../features/auth/authSlice';
import {  useSelector } from 'react-redux';
import FriendItemWithSelect from './partials/FriendItemWithSelect';
import { useCreateChatMutation } from '../features/chat/chatApiSlice';


const CreateGroups = () => {
    const user = useSelector(selectCurrentUser);
    const [createChat] = useCreateChatMutation();
    const [selectedUsers,setSelectedUsers] = useState([]);
    const [message,setMessage] = useState('');
    const [name,setName] = useState('');
    const clickHandler = async(e) => {
        e.preventDefault();
        if (name !== '' && selectedUsers.length >= 2) {
            return await createChat({name,isGroupChat:true,members:[...selectedUsers,user._id],admin:user._id})
        }
        if (name === '') {
            return setMessage('Name is required!')
        }
        if (selectedUsers.length < 3) {
            return setMessage('Group chat needs at least 3 users!')
        }
    }
    return (
        <div className="create-group-container">
            <div className=" cg-header">
                <img src={logo} alt="" style={{ height: "48px", width: "48px", marginRight: "10px" }} />
                New Group
            </div>

            <div className=" cg-header" style={{padding:'13px',color:message && 'red'}}>
                Select members below ({message && message})
            </div>
            <ul className="cg-list">
                {
                    user.friends.map((friend,index) => {
                        return(
                            <FriendItemWithSelect friend={friend} key={index} selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers} />
                        )
                    })
                }
            </ul>
            <div className="con-sb-search">
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter A Name ...' className='sb-search-input' />
                <IconButton onClick={clickHandler}>
                    <DoneIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default CreateGroups