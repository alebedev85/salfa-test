import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IProduct, NewProductType } from "../../../utils/types";
import { FiltersType } from "../filtersSlice/filtersSlice";

type InitialState = {
  productsList: IProduct[];
  categores: string[];
};

const initialState: InitialState = {
  productsList: [],
  categores: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsList: (state, action: PayloadAction<IProduct[]>) => {
      state.productsList = action.payload;
    },
    setCategores: (state, action: PayloadAction<string[]>) => {
      state.categores = action.payload;
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
    addProduct(state, action: PayloadAction<NewProductType>) {
      state.productsList.unshift({
        id: new Date().getTime(),
        ...action.payload,
      });
    },
  },
});

export default productsSlice.reducer;
export const {
  setProductsList,
  selecteProduct,
  deleteProduct,
  addProduct,
  setCategores,
} = productsSlice.actions;
export const productsListSelector = (state: RootState) =>
  state.products.productsList;
export const categoresSelector = (state: RootState) => state.products.categores;
export const filteredProductsSeclector = (
  state: RootState,
  filter: FiltersType
) =>
  state.products.productsList
    .filter(
      (p) =>
        p.title.toLowerCase().includes(filter.search.toLowerCase()) &&
        p.description.toLowerCase().includes(filter.search.toLowerCase())
    )
    .filter((p) => (filter.categore ? p.category === filter.categore : p))
    .filter((p) => (filter.selected ? p.selected : p));
