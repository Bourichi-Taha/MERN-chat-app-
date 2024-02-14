import React, { useState } from 'react'
import logo from "../assets/images/logo.png";
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/auth/authSlice';
import { baseUrl } from '../app/api/apiSlice';
import DropZone from './DropZone';
import TextField from '@mui/material/TextField';
import { useCreateUploadMutation } from '../features/upload/uploadApiSlice';
import { useUpdateUserMutation } from '../features/user/userApiSlice';
import { useRefreshMutation } from '../features/auth/authApiSlice';

const Profile = () => {
  const user = useSelector(selectCurrentUser);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState('');
  const [done, setDone] = useState(false);
  const [createUpload] = useCreateUploadMutation();
  const [updateUser] = useUpdateUserMutation();
  const [refresh] = useRefreshMutation();
  const submitHandler = async (e) => {
    e.preventDefault();
    let userObject;
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      const res = await createUpload(formData);
      if (res.data ) {
        userObject = {
          avatarId: res.data._id,
          username,
        };
        if (password !== '') {
          userObject = {
            avatarId: res.data._id,
            username,
            password
          };
        }
        console.log(userObject)
        await updateUser(userObject);
      }
    }else{
      userObject = {
        username,
      };
      if (password !== '') {
        userObject = {
          username,
          password
        };
      }
      console.log(userObject)
      await updateUser(userObject);
    }
    setDone(true);
    await refresh();
  }
  return (
    <div className="online-users-container">
      <div className=" online-users-header">
        <img src={logo} alt="" style={{ height: "48px", width: "48px", marginRight: "10px" }} />
        Profile
      </div>
      <form className="profile-body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onSubmit={submitHandler}>
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Avatar
              alt={user.username}
              src={baseUrl + '/' + user?.avatar?.path}
              className="con-icon"
              sx={{ width: 150, height: 150, fontSize: 60 }}
            />
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <DropZone done={done} setFilesForParent={setFile} single />
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TextField fullWidth label="username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TextField fullWidth type='password' label="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button type='submit' variant="contained" size='large'>Update</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default Profile