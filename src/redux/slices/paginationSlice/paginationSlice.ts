import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type InitialState = {
  page: number;
  pages: number;
};

const initialState: InitialState = {
  page: 1,
  pages: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setPages: (state, action: PayloadAction<number>) => {
      state.pages = action.payload;
    },
  },
});

export default paginationSlice.reducer;
export const { setPage, setPages } = paginationSlice.actions;
export const paginationSelector = (state: RootState) => state.pagination;
