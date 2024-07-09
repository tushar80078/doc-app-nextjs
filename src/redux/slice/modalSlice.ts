import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ModalType =
  | "signIn"

interface ModalState {
  type: ModalType | null;
  isOpen: boolean;
  data: Record<string, unknown>;
}

const initState: ModalState = {
  type: null,
  isOpen: false,
  data: {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initState,
  reducers: {
    onOpen: (
      state,
      action: PayloadAction<{ type: ModalType; data?: Record<string, unknown> }>
    ) => {
      state.type = action.payload.type;
      state.isOpen = true;
      state.data = action.payload.data || {};
    },
    onClose: (state) => {
      state.type = null;
      state.isOpen = false;
      state.data = {};
    },
  },
});

export const { onOpen, onClose } = modalSlice.actions;
export default modalSlice.reducer;
