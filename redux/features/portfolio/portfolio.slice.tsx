import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../../store";

export interface ModalState {
  isOpen: boolean;
  isEven: boolean;
}

const initialState: ModalState = {
  isOpen: false,
  isEven:false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },


     setIsEven: (state, action: PayloadAction<boolean>) => {
      state.isEven = action.payload;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export const loginModal = (state: AppState) => state.modal;
export default modalSlice.reducer;
