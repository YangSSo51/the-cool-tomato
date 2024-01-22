import { createAsyncThunk } from "@reduxjs/toolkit";
// import { UserState } from "../../actions/types";
import { loginUser } from "../../../api/user";
import { AxiosResponse } from "axios";

const loginUserThunk = createAsyncThunk(
    "user/login",
    async (idpw: { id: string; password: string }, thunkAPI) => {
        console.log("loginUserThunk idpw: " + JSON.stringify(idpw));
        const response: AxiosResponse = await loginUser(idpw);
        return response.data;
    }
);

const testUserThunk = createAsyncThunk("user/test", async () => {
    return "test";
});

export { loginUserThunk, testUserThunk };
