import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: "",
  },
};
const filtersSlice = createSlice({
  name: "filters",
  initialState,

  reducers: {
    changeFilterValue(state, action) {
      state.filters.name = action.payload;
    },
  },
});

export const { changeFilterValue } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
