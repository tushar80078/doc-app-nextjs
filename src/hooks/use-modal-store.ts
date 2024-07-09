"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store/store";
import { onOpen, onClose, ModalType } from "@/redux/slice/modalSlice";

export const useModal = () => {
  const dispatch = useDispatch();

  const { isOpen, type, data } = useSelector((state: RootState) => state.modal);

  const openModal = (type: ModalType, data?: Record<string, unknown>) => {
    dispatch(onOpen({ type, data }));
  };

  const closeModal = () => {
    dispatch(onClose());
  };

  return { isOpen, type, data, openModal, closeModal };
};
