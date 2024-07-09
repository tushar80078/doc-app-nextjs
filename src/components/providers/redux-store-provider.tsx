"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "@/redux/store/store";

interface ReduxStoreProviderProps {
  children: ReactNode;
}

const ReduxStoreProvider = ({ children }: ReduxStoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxStoreProvider;
