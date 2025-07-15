import styles from "./WordRow.module.css";

const WordRow = ({ word }) => {
  const isEditing = false;

  return (
    <tr>
      <td className={styles.tableData}>
        {isEditing ? <input defaultValue={word.english} /> : word.english}
      </td>
      <td td className={styles.tableData}>
        {isEditing ? (
          <input defaultValue={word.transcription} />
        ) : (
          word.transcription
        )}
      </td>
      <td td className={styles.tableData}>
        {isEditing ? <input defaultValue={word.russian} /> : word.russian}
      </td>
      <td td className={styles.tableData}>
        {isEditing ? <input defaultValue={word.tags} /> : word.tags}
      </td>
      <td td className={`${styles.tableData} ${styles.actionButtons}`}>
        {isEditing ? (
          <>
            <button className={styles.button}>Сохранить</button>
            <button className={styles.button}>Отмена</button>
          </>
        ) : (
          <>
            <button className={styles.button}>✏️</button>
            <button className={styles.button}>❌</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default WordRow;
