import React from 'react'
import "../assets/css/style.css"
import { IconButton } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';


const CreateGroups = () => {
    return (
        <div className="createGroups-container">
            <input type="text" placeholder='Enter Group Name' className='sb-search-input' />
            <IconButton>
                <DoneIcon />
            </IconButton>
        </div>
    )
}

export default CreateGroups