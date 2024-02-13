import {createSlice} from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: 'message',
    initialState : { messages: [] , selectedMessage: null},
    reducers: {
        setMessages: (state,action) => {
            const messages = action.payload;
            state.messages = messages;
        },
        setSelectedMessage: (state,action) => {
            const message = action.payload;
            state.selectedMessage = message;
        },
    },
})

export const {setMessages,setSelectedMessage} = messageSlice.actions;

export default messageSlice.reducer;

export const selectCurrentMessages = (state) => state.message.messages;
export const selectCurrentSelectedMessage = (state) => state.message.selectedMessage;