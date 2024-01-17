import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: undefined,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
        }
    }
});

export const setUser = authSlice.actions.setUser;
export default authSlice.reducer;