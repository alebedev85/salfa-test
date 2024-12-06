import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productsReducer from "./slices/productsSlice/productsSlice";
import detailsReducer from "./slices/detailsSlice/detailsSlice";
import filtersReducer from "./slices/filtersSlice/filtersSlice";
import paginationReducer from "./slices/paginationSlice/paginationSlice";
import { mainApi } from "./mainApi";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    details: detailsReducer,
    filters: filtersReducer,
    pagination: paginationReducer,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
