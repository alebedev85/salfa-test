import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/store";
import {
  useGetAllProductsQuery,
  useGetCategorysQuery,
} from "../../redux/slices/productsSlice/productsApi";
import {
  setProductsList,
  setCategores,
} from "../../redux/slices/productsSlice/productsSlice";
import Main from "../Main/Main";
import Details from "../Details/Details";
import CreateProduct from "../CreateProduct/CreateProduct";

import styles from "./App.module.scss";

function App() {
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess } = useGetAllProductsQuery();
  const {
    data: categores,
    isLoading: categoresLoading,
    isSuccess: categoresSucces,
  } = useGetCategorysQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setProductsList(data.products));
      // dispatch(setPages(Math.ceil(data.total / PER_PAGE)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, data]);

  useEffect(() => {
    if (categoresSucces) {
      dispatch(setCategores(categores));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoresLoading, categores]);

  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<Main isLoading={isLoading} />} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/create-product" element={<CreateProduct />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
