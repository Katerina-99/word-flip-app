import { observer } from "mobx-react";
import wordsStore from "../../store/WordsStore";
import styles from "./WordError.module.css";

const WordError = observer(() => {
  const { error } = wordsStore;
  return (
    <div className={styles.error}>
      <p>Ошибка: {error}</p>
    </div>
  );
});

export default WordError;
