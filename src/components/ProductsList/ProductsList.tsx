import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import { filteredProductsSeclector } from "../../redux/slices/productsSlice/productsSlice";
import { selectAllFilters } from "../../redux/slices/filtersSlice/filtersSlice";
import ProductCard from "../ProductCard/ProductCard";
import { shallowEqual } from "react-redux";
import PaginationFeild from "../Pagination/Pagination";
import { useAppDispatch } from "../../redux/store";
import {
  paginationSelector,
  setPages,
} from "../../redux/slices/paginationSlice/paginationSlice";

import styles from "./ProductsList.module.scss";
import { PER_PAGE } from "../../utils/const";

export default function ProductsList() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectAllFilters);
  const { page } = useAppSelector(paginationSelector);
  const products = useAppSelector(
    (state) => filteredProductsSeclector(state, filters),
    shallowEqual
  );

  useEffect(() => {
    if (products.length) {
      dispatch(setPages(Math.ceil(products.length / PER_PAGE)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, products.length]);

  return (
    <div className={styles.productslist}>
      <div className={styles.list}>
        {products ? (
          products
            .slice((page - 1) * PER_PAGE, (page - 1) * PER_PAGE + PER_PAGE)
            .map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => navigate(`/products/${product.id}`)}
                />
              );
            })
        ) : (
          <div>Ничего не найдено</div>
        )}
      </div>
      <PaginationFeild />
    </div>
  );
}
