import React from 'react'
import "../../assets/css/style.css";
import { IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Skeleton from '@mui/material/Skeleton';
import Tooltip from '@mui/material/Tooltip';
import { useAcceptRequestMutation,  useGetSingleUserQuery, useRefuseRequestMutation,  } from '../../features/user/userApiSlice';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { useRefreshMutation } from '../../features/auth/authApiSlice';

const UserRequest = ({ request }) => {
    const { data: user, isLoading } = useGetSingleUserQuery(request);
    const [acceptRequest] = useAcceptRequestMutation();
    const [refuseRequest] = useRefuseRequestMutation();
    const [refresh] = useRefreshMutation();
    const handleAcceptRequest = async (e) => {
        e.preventDefault();
        await acceptRequest(request);
        await refresh();
    }
    const handleRefuseRequest = async (e) => {
        e.preventDefault();
        await refuseRequest(request);
        await refresh();
    }
    const render = () => {
        if (isLoading) {
            return (
                <Skeleton variant="rounded" width={"100%"} height={72} />
            )
        }
        return (
            <li className="ou-list-item">
                <div className="ou-list-item-left">
                    <p className="ou-icon">{user.username[0]}</p>
                    <p className="ou-title">{user.username}</p>
                </div>
                <div className="ou-list-item-right">
                    <Tooltip title={'Accept request!.'} >
                        <IconButton onClick={handleAcceptRequest}>
                            <PersonAddIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={'Refuse request!'} >
                        <IconButton onClick={handleRefuseRequest}>
                            <PersonRemoveIcon color='error' />
                        </IconButton>
                    </Tooltip>
                </div>
            </li>
        )
    }
    return render();
}

export default UserRequest