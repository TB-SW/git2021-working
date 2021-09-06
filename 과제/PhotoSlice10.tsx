// import { createSlice } from '@reduxjs/toolkit'
// import {penguin} from "../../common/"

// interface PhotoItem{
//   id: number;
//   title: string;
//   description?: string;
//   photoUrl: string;
// }

// interface PhotoState {
//   data: PhotoItem[], //포토 아이템 배열
//   isFetched: boolean; //서버에서 데이터를 받아온지에 대한 정보(지금은 안씀 추후 수업 진행하면서 쓸 예정)
// }

// const initialState: PhotoState {
//   data: [
//     {
//       id: 1,
//       profileUrl: penguin,
//       username: "SeongWon Lee",
//       title: "펭귄이",
//       description: "세마리 펭귄들의 대화",
//       photoUrl: penguin,
//     },
//     {
//       id: 2,
//       profileUrl: penguin,
//       username: "SeongWon Lee",
//       title: "펭귄이",
//       description: "세마리 펭귄들의 대화",
//       photoUrl: penguin,
//     },
//     {
//       id: 3,
//       profileUrl: penguin,
//       username: "SeongWon Lee",
//       title: "펭귄이",
//       description: "세마리 펭귄들의 대화",
//       photoUrl: penguin,
//     },
//     {
//       id: 4,
//       profileUrl: penguin,
//       username: "SeongWon Lee",
//       title: "펭귄이",
//       description: "세마리 펭귄들의 대화",
//       photoUrl: penguin,
//     },
//     {
//       id: 5,
//       profileUrl: penguin,
//       username: "SeongWon Lee",
//       title: "펭귄이",
//       description: "세마리 펭귄들의 대화",
//       photoUrl: penguin,
//     },
//   ],
//   isFetched: false,
// };

// const photosSlice = createSlice({
//   name: "photo",
//   initialState: {},
//   reducers: {}
// });

// export default photosSlice.reducer;