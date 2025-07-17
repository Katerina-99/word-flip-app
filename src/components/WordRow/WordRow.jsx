import { useState } from "react";
import styles from "./WordRow.module.css";

const WordRow = ({ word }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingWord, setEditingWord] = useState({
    english: word.english,
    transcription: word.transcription,
    russian: word.russian,
    tags: word.tags,
  });

  const handleEnglishChange = (e) => {
    console.log(e.target.value);
    setEditingWord((prev) => ({ ...prev, english: e.target.value }));
  };

  const handleTranscriptionChange = (e) => {
    setEditingWord((prev) => ({ ...prev, transcription: e.target.value }));
  };

  const handleRussianChange = (e) => {
    setEditingWord((prev) => ({ ...prev, russian: e.target.value }));
  };

  const handleTagsChange = (e) => {
    setEditingWord((prev) => ({ ...prev, tags: e.target.value }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditingWord({
      english: word.english,
      transcription: word.transcription,
      russian: word.russian,
      tags: word.tags,
    });
    setIsEditing(false);
  };

  return (
    <tr>
      <td className={styles.tableData}>
        {isEditing ? (
          <input
            className={styles.input}
            value={editingWord.english}
            onChange={handleEnglishChange}
          />
        ) : (
          word.english
        )}
      </td>
      <td className={styles.tableData}>
        {isEditing ? (
          <input
            className={styles.input}
            value={editingWord.transcription}
            onChange={handleTranscriptionChange}
          />
        ) : (
          word.transcription
        )}
      </td>
      <td className={styles.tableData}>
        {isEditing ? (
          <input
            className={styles.input}
            value={editingWord.russian}
            onChange={handleRussianChange}
          />
        ) : (
          word.russian
        )}
      </td>
      <td className={styles.tableData}>
        {isEditing ? (
          <input
            className={styles.input}
            value={editingWord.tags}
            onChange={handleTagsChange}
          />
        ) : (
          word.tags
        )}
      </td>
      <td className={`${styles.tableData} ${styles.actionButtons}`}>
        {isEditing ? (
          <>
            <button className={styles.button} onClick={handleSave}>
              Сохранить
            </button>
            <button className={styles.button} onClick={handleCancel}>
              Отмена
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                setIsEditing(true);
              }}
              className={styles.button}
            >
              ✏️
            </button>
            <button className={styles.button}>❌</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default WordRow;
