import {createSlice} from "@reduxjs/toolkit";

const uploadSlice = createSlice({
    name: 'upload',
    initialState : { uploads: [] },
    reducers: {
        setUploads: (state,action) => {
            const uploads = action.payload;
            state.uploads = uploads;
        },
    },
})

export const {setUploads} = uploadSlice.actions;

export default uploadSlice.reducer;

export const selectCurrentUploads = (state) => state.upload.uploads;