import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState : { users: [] ,friends: [],requests:[] },
    reducers: {
        setUsers: (state,action) => {
            const data = action.payload;
            state.users = data;
        },
        setFriends: (state,action) => {
            const data = action.payload;
            state.friends = data;
        },
        setRequests: (state,action) => {
            const data = action.payload;
            state.requests = data;
        },
        
    },
})

export const {setUsers,setFriends,setRequests} = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUsers = (state) => state.user.users;
export const selectCurrentFriends = (state) => state.user.friends;
export const selectCurrentRequests = (state) => state.user.requests;