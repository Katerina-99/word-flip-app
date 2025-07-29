import { useState } from "react";
import styles from "./AddWordForm.module.css";

const AddWordForm = () => {
  const [englishValue, setEnglishValue] = useState("");
  const [transcriptionValue, setTranscriptionValue] = useState("");
  const [russianValue, setRussianValue] = useState("");
  const [tagsValue, setTagsValue] = useState("");
  const [errors, setErrors] = useState({
    english: false,
    transcription: false,
    russian: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const englishError = englishValue.trim() === "";
    const transcriptionError = transcriptionValue.trim() === "";
    const russianError = russianValue.trim() === "";

    setErrors({
      english: englishError,
      transcription: transcriptionError,
      russian: russianError,
    });

    if (englishError || transcriptionError || russianError) {
      return;
    }

    const newWord = {
      english: englishValue,
      transcription: transcriptionValue,
      russian: russianValue,
      tags: tagsValue,
    };

    console.log(newWord);
    setEnglishValue("");
    setTranscriptionValue("");
    setRussianValue("");
    setTagsValue("");
  };

  const handleChangeEnglish = (e) => {
    setEnglishValue(e.target.value);
  };
  const handleChangeTranscription = (e) => {
    setTranscriptionValue(e.target.value);
  };
  const handleChangeRussian = (e) => {
    setRussianValue(e.target.value);
  };
  const handleChangeTags = (e) => {
    setTagsValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        English:
        <input
          type="text"
          className={`${styles.input} ${errors.english ? styles.invalid : ""}`}
          value={englishValue}
          onChange={handleChangeEnglish}
        />
        {errors.english && <p className={styles.error}>Поле обязательно</p>}
      </label>
      <label className={styles.label}>
        Transcription:
        <input
          type="text"
          className={`${styles.input} ${
            errors.transcription ? styles.invalid : ""
          }`}
          value={transcriptionValue}
          onChange={handleChangeTranscription}
        />
        {errors.transcription && (
          <p className={styles.error}>Поле обязательно</p>
        )}
      </label>
      <label className={styles.label}>
        Russian:
        <input
          type="text"
          className={`${styles.input} ${errors.russian ? styles.invalid : ""}`}
          value={russianValue}
          onChange={handleChangeRussian}
        />
        {errors.russian && <p className={styles.error}>Поле обязательно</p>}
      </label>
      <label className={styles.label}>
        Tags:
        <input
          type="text"
          className={styles.input}
          value={tagsValue}
          onChange={handleChangeTags}
        />
      </label>
      <button className={styles.addButton}>Add word</button>
    </form>
  );
};

export default AddWordForm;
