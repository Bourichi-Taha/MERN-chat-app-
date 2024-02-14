import React from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'
import { useGetSingleUserQuery } from '../../features/user/userApiSlice'
import Skeleton from '@mui/material/Skeleton';

const FriendItemWithSelect = ({ friend,selectedUsers, setSelectedUsers }) => {
    const { data: user, isLoading } = useGetSingleUserQuery(friend);
    const changeHandler = (e) => {
        if (e.target.checked) {
            if (selectedUsers.includes(user._id)) {
                return;
            }
            return setSelectedUsers(prev => [...prev,user._id]);
        }
        return setSelectedUsers(prev => prev.filter((id)=> id !== user._id));
    }
    const render = () => {
        if (isLoading) {
            return (
                <Skeleton variant="rounded" width={"100%"} height={72} />
            )
        }
        return (
            <li className="cg-list-item">
                <div className="cg-list-item-text">
                    <p className="ou-icon">{user.username[0]}</p >
                    <p className="ou-title">{user.username}</p>
                </div >
                <FormControlLabel control={<Checkbox onChange={changeHandler} />} label="" />
            </li >
        )
    }
    return render();
}

export default FriendItemWithSelect