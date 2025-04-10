import { createSlice } from "@reduxjs/toolkit";

const rdSlice = createSlice({
  name: "rd",
  initialState: [],
  reducers: {
    addRD: (state, action) => {
      state.push(action.payload);
    },
    updateRD: (state, action) => {
      const rd = state.find((r) => r.id === action.payload.id);
      if (rd) rd.amount = action.payload.amount;
    },
  },
});

export const { addRD, updateRD } = rdSlice.actions;
export default rdSlice.reducer;
