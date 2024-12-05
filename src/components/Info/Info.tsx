import { IProduct } from "../../utils/types";

import styles from "./Info.module.scss";

interface InfoProps {
  info: IProduct;
}

export default function Info() {
  return (
    <div className={styles.wrapper}>
      <img className={styles.infoImage} src={""} alt={"gghgf"} />

      <div>
        <h2 className={styles.infoTitle}>rtertreterter</h2>
        <div className={styles.listGroup}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <b>Native Name:</b> gdgdfgdfg
            </li>
            <li className={styles.listItem}>
              <b>Population</b> dfgdfgdfgdf
            </li>
            <li className={styles.listItem}>
              <b>Region:</b> dfgdfgdfgdf
            </li>
            <li className={styles.listItem}>
              <b>Sub Region:</b> dfgdfgdfgdfg
            </li>
            <li className={styles.listItem}>
              <b>Capital:</b> fgdfgdf
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
