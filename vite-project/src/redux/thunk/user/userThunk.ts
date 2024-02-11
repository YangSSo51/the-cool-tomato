import { createAsyncThunk } from "@reduxjs/toolkit";
// import { UserState } from "../../actions/types";
import { loginUser, logoutAPI } from "../../../api/user";
import { AxiosResponse } from "axios";

const loginUserThunk = createAsyncThunk(
    "user/login",
    async (idpw: { loginId: string; password: string }, thunkAPI) => {
        // console.log("loginUserThunk idpw: " + JSON.stringify(idpw));
        const response: AxiosResponse = await loginUser(idpw);
        return response.data;
    }
);

const logoutUserThunk = createAsyncThunk(
    "user/logout",
    async (accessToken: string, thunkAPI) => {
        const response: AxiosResponse = await logoutAPI(accessToken);
        return response.data;
    }
);

const testUserThunk = createAsyncThunk("user/test", async () => {
    return "test";
});

export { loginUserThunk, logoutUserThunk, testUserThunk };
