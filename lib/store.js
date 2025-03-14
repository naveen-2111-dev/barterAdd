import { configureStore } from "@reduxjs/toolkit";
import MetamaskReducer from "@/lib/features/Metamask/slice.js";

export function makeStore() {
  return configureStore({
    reducer: {
      metamask: MetamaskReducer,
    },
  });
}

export const store = makeStore();
