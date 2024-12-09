import styles from "./Preloader.module.scss";

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.container}>
        <span className={styles.round}></span>
      </div>
    </div>
  );
};

export default Preloader;
