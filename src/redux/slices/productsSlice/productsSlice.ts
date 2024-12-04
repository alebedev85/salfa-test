import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IProduct } from "../../../utils/types";

type InitialState = {
  productsList: IProduct[];
  selected: boolean;
};

const initialState: InitialState = {
  productsList: [],
  selected: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsList: (state, action: PayloadAction<IProduct[]>) => {
      state.productsList = action.payload;
    },
    setProductsSelected: (state) => {
      state.selected = !state.selected;
    },
  },
});

export default productsSlice.reducer;
export const { setProductsList, setProductsSelected } = productsSlice.actions;
export const productsListSelector = (state: RootState) =>
  state.products.productsList;
