import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IProduct } from "../../../utils/types";

type InitialState = {
  details: IProduct | null;
};

const initialState: InitialState = {
  details: null,
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setDetails: (state, action: PayloadAction<IProduct>) => {
      state.details = action.payload;
    },
    resetDetails: (state) => {
      state.details = null;
    },
  },
});

export default detailsSlice.reducer;
export const { setDetails, resetDetails } = detailsSlice.actions;
export const detailstSelector = (state: RootState) =>
  state.details.details;
