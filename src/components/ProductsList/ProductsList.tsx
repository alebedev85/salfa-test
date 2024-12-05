import { useNavigate } from 'react-router-dom';
import { productsListSelector } from "../../redux/slices/productsSlice/productsSlice";
import { useAppSelector } from "../../redux/store";
import ProductCard from "../ProductCard/ProductCard";

import styles from "./ProductsList.module.scss";

export default function ProductsList() {
  const navigate = useNavigate();
  const products = useAppSelector(productsListSelector);
  return (
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
  );
}
