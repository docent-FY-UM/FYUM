import { createSlice } from "@reduxjs/toolkit";

const initialExhibitionModalState = {
  isFirst: true
};

const exhibitionModalSlice = createSlice({
  name: "exhibitonModal",
  initialState: initialExhibitionModalState,
  reducers: {
    // 모달 닫기
    closeModal(state) {
      state.isFirst = true;
    },
  },
});

export const exhibitionModalActions = exhibitionModalSlice.actions;
export default exhibitionModalSlice.reducer;
