import React from 'react';
import "../assets/css/style.css";
import { IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import logo from "../assets/images/logo.png";
import { useGetGroupsQuery } from '../features/chat/chatApiSlice';
import GroupItem from './partials/GroupItem';

const AvailableGroups = () => {
    const {data:groups,isLoading} = useGetGroupsQuery();
    return (
        <div className="online-users-container">
            <div className=" online-users-header">
                <img src={logo} alt="" style={{ height: "48px", width: "48px", marginRight: "10px" }} />
                Groups
            </div>
            <div className="sb-search">
                <IconButton>
                    <SearchOutlinedIcon />
                </IconButton>
                <input type="text" placeholder='Search here ...' className='sb-search-input' />
            </div>
            <ul className="ou-list">
                {
                    !isLoading && groups.map((grp,index)=>{
                        return (
                            <GroupItem group={grp} key={index} />
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default AvailableGroups