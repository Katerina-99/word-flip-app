import WordRow from "../WordRow/WordRow";
import AddWordForm from "../AddWordForm/AddWordForm";
import WordLoading from "../WordLoading/WordLoading";
import styles from "./WordTable.module.css";
import { useContext } from "react";
import WordsContext from "../../contexts/WordsContext.js";

const WordTable = () => {
  const { words, loading } = useContext(WordsContext);

  if (loading) {
    return <WordLoading />;
  }
  return (
    <div className={styles.contentContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHead}>English</th>
            <th className={styles.tableHead}>Transcription</th>
            <th className={styles.tableHead}>Russian</th>
            <th className={styles.tableHead}>Tags</th>
            <th className={styles.tableHead}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <WordRow key={word.id} word={word} />
          ))}
        </tbody>
      </table>
      <AddWordForm />
    </div>
  );
};

export default WordTable;
