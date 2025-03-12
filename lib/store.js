import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/slice";
import booleanReducer from "./features/quote/slice";

export function makeStore() {
  return configureStore({
    reducer: {
      counter: counterReducer,
      boolean: booleanReducer,
    },
  });
}

export const store = makeStore();