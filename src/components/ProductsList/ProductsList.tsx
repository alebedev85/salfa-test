import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import { filteredProductsSeclector } from "../../redux/slices/productsSlice/productsSlice";
import { selectAllFilters } from "../../redux/slices/filtersSlice/filtersSlice";
import ProductCard from "../ProductCard/ProductCard";
import { shallowEqual } from "react-redux";
import PaginationFeild from "../Pagination/Pagination";

import styles from "./ProductsList.module.scss";

export default function ProductsList() {
  const navigate = useNavigate();
  const filters = useAppSelector(selectAllFilters);
  const products = useAppSelector(
    (state) => filteredProductsSeclector(state, filters),
    shallowEqual
  );

  return (
    <div className={styles.productslist}>
      <div className={styles.list}>
        {products ? (
          products.map((product) => {
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
