import { createSlice } from "@reduxjs/toolkit";

const initialListState = {
  type: "list",
  paintingId: 0,
  titleKr: "",
  titleOrigin: "",
  imgSrc: "",
};

const ListSlice = createSlice({
  name: "painterList",
  initialState: initialListState,
  reducers: {
    loadList(state, action) {
      state.type = action.payload.type;
      state.paintingId = action.payload.paintingId;
      state.titleKr = action.payload.titleKr;
      state.titleOrigin = action.payload.titleOrigin;
      state.imgSrc = action.payload.imgSrc;
    },
  },
});

export const ListActions = ListSlice.actions;
export default ListSlice.reducer;
