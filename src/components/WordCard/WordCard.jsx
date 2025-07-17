import { useState } from "react";
import styles from "./WordCard.module.css";

const WordCard = ({ word }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const handleTranslation = () => {
    setShowTranslation(true);
  };

  return (
    <div className={styles.card}>
      <h2>{word.english}</h2>
      <p>{word.transcription}</p>
      {showTranslation ? (
        <p>{word.russian}</p>
      ) : (
        <button onClick={handleTranslation} className={styles.button}>
          Show translation ↪
        </button>
      )}
    </div>
  );
};

export default WordCard;
