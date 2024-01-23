// // import { configureStore, createSlice } from '@reduxjs/toolkit'
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // 로컬 스토리지 저장할 경우
// // import storageSession from 'redux-persist/lib/storage/session'; // 세션 스토리지 저장할 경우

// const persistConfig = {
//     key: 'root',
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig, userReducer);

// export default configureStore({
//     reducer: {
//         user: persistedReducer,
//         post: postReducer
//     }
// })


// let stock = createSlice({
//   name: 'stock',
//   initialState: [10,11,12]
// }) // useState 역할임
// // reducer에 등록해야 사용가능

// let cart = createSlice({
//   name : 'cart',
//   initialState : [
//     {id : 0, name : 'White and Black', count : 2},
//     {id : 1, name : 'Grey Yordan', count : 1}
//   ], 
//   reducers: {
//     addCount(state, action){
//       let 번호 = state.findIndex((a)=>{ 
//         return a.id == action.payload 
//       })
//       state[번호].count++
//     },
//     addItem(state, action){
//       state.push(action.payload)
//     }
//   }
// })

// export let { addCount, addItem } = cart.actions

// export default configureStore({
//   reducer: { 
//     user: user.reducer,
//     stock : stock.reducer,
//     cart: cart.reducer
//     // 작명 : user.reducer
//   }
// }) 