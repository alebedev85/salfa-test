import { useAppSelector } from "../../redux/store";
import { detailstSelector } from "../../redux/slices/detailsSlice/detailsSlice";

import styles from "./Info.module.scss";


export default function Info() {
  const details = useAppSelector(detailstSelector);
  return details ? (
    <div className={styles.wrapper}>
      <img
        className={styles.infoImage}
        src={details.thumbnail}
        alt={details.title}
      />

      <div>
        <h2 className={styles.infoTitle}>{details.title}</h2>
        <div className={styles.listGroup}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <b>Описание:</b> {details.description}
            </li>
            <li className={styles.listItem}>
              <b>Бренд:</b> {details.brand}
            </li>
            <li className={styles.listItem}>
              <b>Категория товара:</b> {details.category}
            </li>
            <li className={styles.listItem}>
              <b>Цена:</b> {details.price}
            </li>
            <li className={styles.listItem}>
              <b>Цена со скидкой:</b>{" "}
              {details.price - details.price * details.discountPercentage/100}
            </li>
            <li className={styles.listItem}>
              <b>Рейтинг:</b> {details.rating}
            </li>
            <li className={styles.listItem}>
              <b>Гарантия:</b> {details.warrantyInformation}
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <div>Ничего не найдено</div>
  );
}
