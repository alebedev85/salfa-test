import { productsListSelector } from "../../redux/slices/productsSlice/productsSlice";
import { useAppSelector } from "../../redux/store";
import ProductCard from "../ProductCard/ProductCard";

import styles from "./ProductsList.module.scss";

export default function ProductsList() {
  const products = useAppSelector(productsListSelector)
  return (
    <div className={styles.list}>
      {products ? (
        products.map((elm) => {
          return (
            <ProductCard
              title={elm.title}
              thumbnail={elm.thumbnail}
              description={elm.description}
            />
          );
        })
      ) : (
        <div>Ничего не найдено</div>
      )}
    </div>
  );
}
