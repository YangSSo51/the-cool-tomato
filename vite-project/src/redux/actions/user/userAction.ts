import { loginUser } from "../../../api/user";
import { PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../../types/DataTypes";

function loginUserAction(
    state: UserState,
    action: PayloadAction<{ id: string; password: string }>
) {
    const idpw: { id: string; password: string } = action.payload;
    loginUser(idpw);
}

export { loginUserAction };
