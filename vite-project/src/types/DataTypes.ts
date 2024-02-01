export type userInfo = {
    userId: number;
    loginId: string;
    pw?: string;
    token: string;
    nickname: string;
    sex: boolean;
    birthday: string;
    profileImg: string;
    auth: string;
    joinData: string;
};

export type goodsField = {
    categoryId: number | string;
    productName: string;
    productContent: string;
    paymentLink: string;
    price: number | string;
    deliveryCharge: number | string;
    quantity: number | string;
    images: string;
};

// export type solvedData = {
//     solved: Boolean;
//     probNo: number;
//     userInfo?: userSolvedData;
//     time_sort_list?: userSolvedData[];
//     memory_sort_list?: userSolvedData[];
//   };

export type UserState = {
    profileImg: string;
    auth: "BUYER" | "SELLER" | "ADMIN" | "FAIL" | "INIT";
    accessToken: string;
    refreshToken: string;
};

export type RegisterUser = {
    loginId: string;
    password: string;
    email: string;
    nickname: string;
    sex: string;
    birthday: string;
};

export type RegisterSeller = {
    business_number: string;
    business_content: string;
    mail_order_sales_number: string;
    business_address: string;
    phone_number: string;
};

export interface ItemQnA {
    productQuestionBoardId: number;
    writerId: number;
    writerNickname: string;
    productId: number;
    questionContent: string;
    answerContent: string | null;
    questionRegisterDate: string;
    answerRegisterDate: string | null;
    answer: number;
    isMine: number;
}
