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
}

export type goodsField = {
    categoryId : number, 
    productName : string, 
    productContent : string, 
    paymentLink : string, 
    price : number, 
    deliveryCharge : number, 
    quantity : number, 
    images : string
}

// export type solvedData = {
//     solved: Boolean;
//     probNo: number;
//     userInfo?: userSolvedData;
//     time_sort_list?: userSolvedData[];
//     memory_sort_list?: userSolvedData[];
//   };