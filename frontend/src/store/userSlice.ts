import { createSlice } from "@reduxjs/toolkit";

interface UserInfo {
  userNickNm: string;
  accessToken: string;
  survey: boolean;
  id: number;
}

const initialUserState: UserInfo = {
  userNickNm: "",
  accessToken: "",
  survey: false,
  id: 0,
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
    changeId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { changeUserNickNm, changeAccessToken, changeSurvey, changeId } =
  userSlice.actions;
export default userSlice.reducer;
