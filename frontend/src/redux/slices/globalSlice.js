// globalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setUserToStore(state, action) {
            console.log('setUserToStore', action.payload);
            state.user = action.payload;
        },
    },
});

export const {
    setUserToStore, setUserTypeToStore,
} = globalSlice.actions;
export default globalSlice.reducer;
