import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type uiState = {
  state: "card" | "list";
};

const initialState: uiState = {
  state: "card",
};

const slice = createSlice({
  name: "uiState",
  initialState,
  reducers: {
    toggleUiState: (state) => {
      if (state.state === "card") return { state: "list" };
      else return { state: "card" };
    },
  },
});

export default slice.reducer;

export const { toggleUiState } = slice.actions;
