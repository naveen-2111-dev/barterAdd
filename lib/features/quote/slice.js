import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const booleanSlice = createSlice({
  name: "boolean",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
    setTrue: (state) => {
      state.value = true;
    },
    setFalse: (state) => {
      state.value = false;
    },
  },
});

export const { toggle, setTrue, setFalse } = booleanSlice.actions;

export default booleanSlice.reducer;