import { useContext } from "react";
import WordsContext from "../../contexts/WordsContext";
import styles from "./WordError.module.css";

const WordError = () => {
  const { error } = useContext(WordsContext);
  return (
    <div className={styles.error}>
      <p>Ошибка: {error}</p>
    </div>
  );
};

export default WordError;
