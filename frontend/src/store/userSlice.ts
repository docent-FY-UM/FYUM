import { createSlice } from "@reduxjs/toolkit";

interface UserInfo {
  userNickNm: string;
  accessToken: string;
  survey: boolean;
}

const initialUserState: UserInfo = {
  userNickNm: "",
  accessToken: "",
  survey: false,
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
    changeSurvey: (state, action) => {
      state.survey = action.payload;
    },
  },
});

export const { changeUserNickNm, changeAccessToken, changeSurvey } =
  userSlice.actions;
export default userSlice.reducer;
