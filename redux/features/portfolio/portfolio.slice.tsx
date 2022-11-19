import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../../store";

export interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export const loginModal = (state: AppState) => state.modal;
export default modalSlice.reducer;
