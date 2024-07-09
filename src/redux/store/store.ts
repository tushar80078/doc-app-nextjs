import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "@/redux/slice/modalSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
