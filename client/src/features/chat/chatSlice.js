import {createSlice} from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: 'chat',
    initialState : { chats: [] , selectedChat: null},
    reducers: {
        setChats: (state,action) => {
            const chats = action.payload;
            state.chats = chats;
        },
        setSelectedChat: (state,action) => {
            const chat = action.payload;
            state.selectedChat = chat;
        },
    },
})

export const {setChats,setSelectedChat} = chatSlice.actions;

export default chatSlice.reducer;

export const selectCurrentChats = (state) => state.chat.chats;
export const selectCurrentSelectedChat = (state) => state.chat.selectedChat;