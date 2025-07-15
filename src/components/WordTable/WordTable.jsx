import WordRow from "../WordRow/WordRow";
import styles from "./WordTable.module.css";
import words from "../../words";

const WordTable = () => {
  return (
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
  );
};

export default WordTable;
