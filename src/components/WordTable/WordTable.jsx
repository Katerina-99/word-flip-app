// import { useEffect } from "react";
import { observer } from "mobx-react";
import wordsStore from "../../store/WordsStore";
import WordRow from "../WordRow/WordRow";
import AddWordForm from "../AddWordForm/AddWordForm";
import WordLoading from "../WordLoading/WordLoading";
import WordError from "../WordError/WordError";
import styles from "./WordTable.module.css";

const WordTable = observer(() => {
  const { words, loading, error, addWord } = wordsStore;

  if (loading) {
    return <WordLoading />;
  }
  if (error) {
    return <WordError />;
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
      <AddWordForm onAdd={addWord} />
    </div>
  );
});

export default WordTable;
