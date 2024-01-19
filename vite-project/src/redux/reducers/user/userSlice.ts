import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../actions/types";
// import { loginUserAction } from "../../actions/user/userAction";
import { loginUserThunk, testUserThunk } from "../../thunk/user/userThunk";

const initialState: UserState = {
    profileImg: "",
    auth: "BUYER",
    accessToken: "",
    refreshToken: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUserThunk.fulfilled, (state, action) => {
            return action.payload.data.data;
        }),
            builder.addCase(testUserThunk.fulfilled, (state, action) => {
                console.log(action.payload);
                return action.payload;
            });
    },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
