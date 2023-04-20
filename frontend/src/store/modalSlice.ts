import { createSlice } from "@reduxjs/toolkit";

// interface ModalType {
//     type: string;
//     isOpen: boolean;
//     title?: string;
//     content: JSX.Element | string;
//     callback?: () => any;
//   }

const initialModalState = {
    type: "alert",
    isOpen: false,
    title: "",
    content: "",
    callback: undefined
};

const ModalSlice = createSlice({
  name: "auth",
  initialState: initialModalState,
  reducers: {
    // 모달 닫기
    closeModal(state) {
        state.isOpen = false
    },
    // 모달 열기
    openModal(state, action) {
        state.type = action.payload.type;
        state.isOpen = true;
        state.title = action.payload.title;
        state.content = action.payload.content;
        state.callback = action.payload.callback;
    },
  },
});

export const ModalActions = ModalSlice.actions;
export default ModalSlice.reducer;
