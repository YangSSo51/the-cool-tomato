interface UserState {
    profileImg: string;
    auth: "BUYER" | "SELLER" | "ADMIN";
    accessToken: string;
    refreshToken: string;
}

export type { UserState };
