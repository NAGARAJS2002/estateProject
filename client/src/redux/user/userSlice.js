import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    currentUser: null,
    error: null,
    loading: false,
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signInStart: (state) => {
            state.loading = true;
        },

        signInSuccess :  (state , action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        
        },

        signInFailure : (state , action) => {
            state.error = action.payload;
            state.loading = false;
        },

        updateUserStart : (state ) => {
            state.loading = true;
        } ,

        updateUserSuccess : (state ,action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },

        updateUserFailure : (state , action) => {
            state.error = action.payload;
            state.loading = false;
        },

        deleteUserStart: (state) => {
            state.loading = true;
        },

        deleteUserSuccess : (state , action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },

        deleteUserFailure : (state , action) => {
            state.currentUser = action.payload;
            state.error = null;
        },
        signOutUserStart: (state) => {
            state.loading = true;
        },

        signOutUserSuccess : (state , action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },

        signOutUserFailure : (state , action) => {
            state.currentUser = action.payload;
            state.error = null;
        }
    }
});

export const {signInStart , 
    signInSuccess , 
    signInFailure , 
    updateUserStart,
    updateUserFailure,
    updateUserSuccess,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
    signOutUserFailure,
    signOutUserSuccess,
    signOutUserStart,
} = userSlice.actions;

export default userSlice.reducer;