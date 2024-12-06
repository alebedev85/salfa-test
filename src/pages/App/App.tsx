import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useGetAllProductsQuery } from "../../redux/slices/productsSlice/productsApi";
import { setProductsList } from "../../redux/slices/productsSlice/productsSlice";
import Main from "../Main/Main";
import Details from "../Details/Details";
import CreateProduct from "../CreateProduct/CreateProduct";
import { paginationSelector, setPages } from "../../redux/slices/paginationSlice/paginationSlice";
import { PER_PAGE } from '../../utils/const';

import styles from "./App.module.scss";


function App() {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector(paginationSelector);
  const { data, isLoading, isSuccess } = useGetAllProductsQuery(page);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setProductsList(data.products));
      dispatch(setPages(Math.ceil(data.total / PER_PAGE)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, page]);
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<Main isLoading={isLoading}/>} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/create-product" element={<CreateProduct />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
