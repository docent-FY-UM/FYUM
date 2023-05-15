import { createSlice } from "@reduxjs/toolkit";

// interface SideBarTypes {
//   nameKr: string;
//   nameEn?: string;
//   info: string;
// }

interface SideBarState {
  nameKr: string;
  nameEn?: string;
  info: string;
  isOpen: boolean;
}

const initialSideBarState: SideBarState = {
  nameKr: "",
  nameEn: "",
  info: "",
  isOpen: true,
};

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: initialSideBarState,
  reducers: {
    closeSideBar(state) {
      state.isOpen = false;
    },
    openSideBar(state, action) {
      state.isOpen = true;
    },
    successSideBar(state, action) {
      state.nameKr = action.payload[0].nameKr;
      state.nameEn = action.payload[0].nameEn;
      state.info = action.payload[0].info;
    },
  },
});

export const sideBarActions = sideBarSlice.actions;

export default sideBarSlice.reducer;
