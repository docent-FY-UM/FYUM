import { createSlice } from "@reduxjs/toolkit";

interface UserInfo {
  userNickNm: string;
  accessToken: string;
}

const initialUserState: UserInfo = {
  userNickNm: "",
  accessToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    changeUserNickNm: (state, action) => {
      state.userNickNm = action.payload;
    },
    changeAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const { changeUserNickNm, changeAccessToken } = userSlice.actions;
export default userSlice.reducer;
