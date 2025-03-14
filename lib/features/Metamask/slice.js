import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const MetamaskSlicer = createSlice({
  name: "Metamask",
  initialState,
  reducers: {
    setTrue: (state) => {
      state.value = true;
    },
    setFalse: (state) => {
      state.value = false;
    },
  },
});

export const { setTrue, setFalse } = MetamaskSlicer.actions;

export default MetamaskSlicer.reducer;
