import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/slices/productsSlice/productsApi";
import { setProductsList } from "../../redux/slices/productsSlice/productsSlice";
import { useAppDispatch } from "../../redux/store";
import Preloader from "../../components/Preloader/Preloader";
import ProductsList from "../../components/ProductsList/ProductsList";
import Details from "../../components/Details/Details";

import styles from "./App.module.scss";

function App() {
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess } = useGetAllProductsQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setProductsList(data.products));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Routes>
          <Route
            path="/"
            element={isLoading ? <Preloader /> : <ProductsList />}
          />
          <Route path="/products/:id" element={<Details />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
