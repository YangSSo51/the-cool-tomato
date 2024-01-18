import { loginUser } from "../../../api/user";
import { PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../types";
import { HttpStatusCode } from "axios";

function loginUserAction(
    state: UserState,
    action: PayloadAction<{ id: string; password: string }>
) {
    const idpw: { id: string; password: string } = action.payload;
    loginUser(
        idpw,
        (response) => {
            const { status, data } = response;
            if (status === HttpStatusCode.Created) {
                state = data.data;
            }
        },
        (response) => {
            const { status, data } = response;
        }
    );
}

export { loginUserAction };
