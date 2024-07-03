import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: "",
  },
};
const filtersSlice = createSlice({
  name: "filters",
  initialState,
  selectors: { selectNameFilter: (state) => state.filters.name },
  reducers: {
    changeFilterValue(state, action) {
      state.filters.name = action.payload;
    },
  },
});

export const { changeFilterValue } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const { selectNameFilter } = filtersSlice.selectors;
