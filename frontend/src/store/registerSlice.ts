import { createSlice } from "@reduxjs/toolkit";

interface RegisterState {
  title: string;
  contents: string;
  img: string;
  loading: boolean;
  error: null | string;
}

const initialRegisterState: RegisterState = {
  title: "",
  contents: "",
  img: "",
  loading: false,
  error: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState: initialRegisterState,
  reducers: {
    // 입력 폼 변경
    changeField(state, action) {
      let { key, value } = action.payload;
      return {
        ...state,
        [key]: value,
      };
    },
    // 이미지 등록
    setMyDrawingImg(state, action) {
      console.log("이미지 잘옴?", action.payload);
      state.img = action.payload;
    },
    // 폼 초기화
    reset(state) {
      Object.assign(state, initialRegisterState);
    },
    // 폼 등록 요청
    formRequestStart(state, action) {
      state.loading = true;
      state.error = null;
    },
    formRequestSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    formRequestError(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const registerActions = registerSlice.actions;

export default registerSlice.reducer;
