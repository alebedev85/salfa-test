import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IProduct } from "../../../utils/types";
import { FiltersType } from "../filtersSlice/filtersSlice";

export interface ProductStateType extends IProduct {
  selected?: boolean;
}

type InitialState = {
  productsList: ProductStateType[];
};

const initialState: InitialState = {
  productsList: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsList: (state, action: PayloadAction<IProduct[]>) => {
      state.productsList = action.payload;
    },
    selecteProduct: (state, action: PayloadAction<number>) => {
      const selectedProduct = state.productsList.find(
        (product) => product.id === action.payload
      );
      if (selectedProduct) {
        selectedProduct.selected = !selectedProduct.selected;
      }
    },
    deleteProduct(state, action: PayloadAction<number>) {
      state.productsList = state.productsList.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export default productsSlice.reducer;
export const { setProductsList, selecteProduct, deleteProduct } =
  productsSlice.actions;
export const productsListSelector = (state: RootState) =>
  state.products.productsList;
export const filteredProductsSeclector = (
  state: RootState,
  filter: FiltersType
) =>
  state.products.productsList.filter((p) => (filter.selected ? p.selected : p));
