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

  const isEnglishEmpty = editingWord.english.trim() === "";
  const isTranscriptionEmpty = editingWord.transcription.trim() === "";
  const isRussianEmpty = editingWord.russian.trim() === "";

  const isInvalid = isEnglishEmpty || isTranscriptionEmpty || isRussianEmpty;

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
          <>
            <input
              className={`${styles.input} ${
                isEnglishEmpty ? styles.invalid : ""
              }`}
              value={editingWord.english}
              onChange={handleEnglishChange}
            />
            {isEnglishEmpty && <p className={styles.error}>Поле обязательно</p>}
          </>
        ) : (
          word.english
        )}
      </td>
      <td className={styles.tableData}>
        {isEditing ? (
          <>
            <input
              className={`${styles.input} ${
                isTranscriptionEmpty ? styles.invalid : ""
              }`}
              value={editingWord.transcription}
              onChange={handleTranscriptionChange}
            />
            {isTranscriptionEmpty && (
              <p className={styles.error}>Поле обязательно</p>
            )}
          </>
        ) : (
          word.transcription
        )}
      </td>
      <td className={styles.tableData}>
        {isEditing ? (
          <>
            <input
              className={`${styles.input} ${
                isRussianEmpty ? styles.invalid : ""
              }`}
              value={editingWord.russian}
              onChange={handleRussianChange}
            />
            {isRussianEmpty && <p className={styles.error}>Поле обязательно</p>}
          </>
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
            <button
              disabled={isInvalid}
              className={styles.editingButton}
              onClick={handleSave}
            >
              Сохранить
            </button>
            <button className={styles.editingButton} onClick={handleCancel}>
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
