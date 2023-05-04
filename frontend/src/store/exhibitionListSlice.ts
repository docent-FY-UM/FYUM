import { createSlice } from "@reduxjs/toolkit";

interface ExhibitionListState {
  data: any;
  loading: boolean;
  error: null | string;
}

const initialexhibitionListState: ExhibitionListState = {
  data: [],
  loading: false,
  error: null,
};

const exhibitionListSlice = createSlice({
  name: "register",
  initialState: initialexhibitionListState,
  reducers: {
    // 전시회 리스트 받아오기
    getExhibitionListStart(state) {
      state.loading = true;
      state.error = null;
    },
    getExhibitionListSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getExhibitionListError(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const exhibitionListActions = exhibitionListSlice.actions;

export default exhibitionListSlice.reducer;
