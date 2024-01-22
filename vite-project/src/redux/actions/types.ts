interface UserState {
    profileImg: string;
    auth: "BUYER" | "SELLER" | "ADMIN" | "FAIL" | "INIT";
    accessToken: string;
    refreshToken: string;
}

export type { UserState };
