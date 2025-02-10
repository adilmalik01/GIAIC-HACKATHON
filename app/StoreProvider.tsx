"use client"; 

import { Provider } from "react-redux";
import { store } from "./redux/store";
interface StoreProviderProps {
  children: React.ReactNode;
}

export default function StoreProviders({ children }: StoreProviderProps) {
  return <Provider store={store}>{children}</Provider>
}
