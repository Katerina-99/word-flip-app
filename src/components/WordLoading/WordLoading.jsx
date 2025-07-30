import styles from "./WordLoading.module.css";

const WordLoading = () => {
  return (
    <div className={styles.loading}>
      <div className={`${styles.loadBall} ${styles.loadBall_1}`}>
        <div className={styles.loadInnerBall}></div>
      </div>
      <div className={`${styles.loadBall} ${styles.loadBall_2}`}>
        <div className={styles.loadInnerBall}></div>
      </div>
      <div className={`${styles.loadBall} ${styles.loadBall_3}`}>
        <div className={styles.loadInnerBall}></div>
      </div>
      <div className={`${styles.loadBall} ${styles.loadBall_4}`}>
        <div className={styles.loadInnerBall}></div>
      </div>
      <div className={`${styles.loadBall} ${styles.loadBall_5}`}>
        <div className={styles.loadInnerBall}></div>
      </div>
    </div>
  );
};

export default WordLoading;
