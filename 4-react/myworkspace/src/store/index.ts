// global state(전역 상태) 저장소

// 프론트엔드에서 stat는 : UI 처리 바뀌게 하는 변수
// ex)->모달 팝업상태(보이고, 안보이고), 연락처 목록상태(10개 보이고, 5개 보이고, 수정모드)

// 백엔드에서 STATE는 : 비즈니스 로직 처리가 바뀌게 하는 데이터
// ex)->주문상태(주문요청, 결제, 결제확인, 배송중, 배송완료)
// ex)->승인상태(제출, 검토중, 반려, 승인)

// global state(전역 상태) 저장소 만듦
// global state : profile, todo, contact .... 여러개 state가 있음
// 이러한 state들은 다른 컴포넌트와 state가 공유 됨

import { configureStore } from '@reduxjs/toolkit';
import { type } from 'os';
import ProfileReducer from "../domain/profile/profileSlice";

// global state(전역 상태) 저장소 만듦
// global state : profile, todo, contact ... 여러개 state가 있음
// 이러한 state들은 다른 컴포넌트와 state가 공유 됨

export const store = configureStore({
  reducer: {
  profile:ProfileReducer
  }, //각 state별로 처리할 reducer목록
  devTools: true, //개발 툴 사용 여부
});

// typescript 에서는 몇가지 타입 선언을 해야함

// root state 타입 정의
// 가장 최상위 state
// state.profile, state.contact.....

export type RootState = ReturnType<typeof store.getState>;

// dispatch타입 정의
// dispatch 함수의 
export type AppDispet