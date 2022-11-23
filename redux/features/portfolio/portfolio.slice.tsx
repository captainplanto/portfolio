import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../../store";

export interface ModalState {
  isOpen: boolean;
  showText: boolean;
}

const initialState: ModalState = {
  isOpen: false,
  showText:false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },


     setShowText: (state, action: PayloadAction<boolean>) => {
      state.showText = action.payload;
    },
  },
});

export const { toggleModal, setShowText } = modalSlice.actions;
export const loginModal = (state: AppState) => state.modal;
export default modalSlice.reducer;
