import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type User = {
    name: string,
    email?: string,
    role: string,
    id?: string,
}
export type AuthState = {
     isAuthanticated: boolean,
        userInfo: null | User
};
const initialState: AuthState = {
        isAuthanticated: false,
        userInfo: null
    };
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setAuthInfo: function(state,action:PayloadAction<AuthState>){
            state.isAuthanticated = action.payload.isAuthanticated;
            state.userInfo = action.payload.userInfo;
        }
    }
});

export const authReducer = authSlice.reducer;
export const {setAuthInfo} = authSlice.actions;