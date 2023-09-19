import React from 'react'
import "../assets/css/style.css"
import {  Checkbox, FormControlLabel, IconButton } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';
import logo from "../assets/images/logo.png";


const CreateGroups = () => {
    return (
        <div className="online-users-container">
            <div className=" online-users-header">
                <img src={logo} alt="" style={{ height: "48px", width: "48px", marginRight: "10px" }} />
                New Group
            </div>

            <div className=" online-users-header">
                Select members below
            </div>
            <ul className="ou-list">
                <li className="ou-list-item">
                    <div className="ou-list-item-text">
                        <p className="ou-icon">H</p>
                        <p className="ou-title">Hello</p>
                    </div>
                    <FormControlLabel control={<Checkbox  onChange={()=>{}}  />} label="" />
                </li>
                <li className="ou-list-item">
                    <div className="ou-list-item-text">
                        <p className="ou-icon">H</p>
                        <p className="ou-title">Hello</p>
                    </div>
                    <FormControlLabel control={<Checkbox  onChange={()=>{}}  />} label="" />
                </li>
                <li className="ou-list-item">
                    <div className="ou-list-item-text">
                        <p className="ou-icon">H</p>
                        <p className="ou-title">Hello</p>
                    </div>
                    <FormControlLabel control={<Checkbox  onChange={()=>{}}  />} label="" />
                </li>
                <li className="ou-list-item">
                    <div className="ou-list-item-text">
                        <p className="ou-icon">H</p>
                        <p className="ou-title">Hello</p>
                    </div>
                    <FormControlLabel control={<Checkbox  onChange={()=>{}}  />} label="" />
                </li>
                <li className="ou-list-item">
                    <div className="ou-list-item-text">
                        <p className="ou-icon">H</p>
                        <p className="ou-title">Hello</p>
                    </div>
                    <FormControlLabel control={<Checkbox  onChange={()=>{}}  />} label="" />
                </li>
                <li className="ou-list-item">
                    <div className="ou-list-item-text">
                        <p className="ou-icon">H</p>
                        <p className="ou-title">Hello</p>
                    </div>
                    <FormControlLabel control={<Checkbox  onChange={()=>{}}  />} label="" />
                </li>
                <li className="ou-list-item">
                    <div className="ou-list-item-text">
                        <p className="ou-icon">H</p>
                        <p className="ou-title">Hello</p>
                    </div>
                    <FormControlLabel control={<Checkbox  onChange={()=>{}}  />} label="" />
                </li>
                <li className="ou-list-item">
                    <div className="ou-list-item-text">
                        <p className="ou-icon">H</p>
                        <p className="ou-title">Hello</p>
                    </div>
                    <FormControlLabel control={<Checkbox  onChange={()=>{}}  />} label="" />
                </li>

            </ul>
            <div className="con-sb-search">
                <input type="text" placeholder='Enter A Name ...' className='sb-search-input' />
                <IconButton>
                    <DoneIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default CreateGroups