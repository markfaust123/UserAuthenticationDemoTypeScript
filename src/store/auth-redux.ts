import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        isAuthenticated: false,
    },
    reducers: {
        authenticate: (state, action) => {
            state.token = action.payload.token;
            state.isAuthenticated = !!state.token;
        },
        logout: (state, action) => {
            state.token = null;
            state.isAuthenticated = false;
        }
    }
});

export const authenticate = authSlice.actions.authenticate;
export const logout = authSlice.actions.logout;
export default authSlice.reducer;