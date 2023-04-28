import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  loading: false, // 로딩중. 사가 쓰려면 얘가 필요함.
  error: null, // 에러 유무
  user: null, // 유저 정보 저장
  token: null, // 토큰 저장
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    // 로그아웃 요청
    logoutRequestStart(state) {
      state.loading = true;
      state.error = null;
    },
    logoutRequestSuccess(state, action) {
      state.loading = false;
      //   state.isAuth = false;
      state.token = null;
    },
    logoutRequestError(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
