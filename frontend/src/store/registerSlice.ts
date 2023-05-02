import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

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
    changeField(state, action) {
      let { key, value } = action.payload;
      return {
        ...state,
        [key]: value
      };
    },
    // 폼 등록 요청
    formRequestStart(state) {
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
