import WordRow from "../WordRow/WordRow";
import AddWordForm from "../AddWordForm/AddWordForm";
import styles from "./WordTable.module.css";

const WordTable = ({ words }) => {
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
