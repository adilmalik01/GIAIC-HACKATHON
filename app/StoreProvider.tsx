"use client"; // Convert this into a Client Component

import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function StoreProviders({ children }:any) {
  return <Provider store={store}>{children}</Provider>
}
