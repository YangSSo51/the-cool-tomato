import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../actions/types";
import { loginUserAction } from "../../actions/user/userAction";

const initialState: UserState = {
    profileImg: "",
    auth: "BUYER",
    accessToken: "",
    refreshToken: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: loginUserAction,
    },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
