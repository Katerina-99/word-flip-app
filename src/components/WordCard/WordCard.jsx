import { useState, useRef, useEffect } from "react";
import styles from "./WordCard.module.css";

const WordCard = ({ word, onShowTranslation }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const buttonRef = useRef(null);

  useEffect(() => {
    setShowTranslation(false);
  }, [word]);

  useEffect(() => {
    if (!showTranslation && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [word, showTranslation]);

  const handleTranslation = () => {
    setShowTranslation(true);
    onShowTranslation();
  };

  return (
    <div className={styles.card}>
      <h2>{word.english}</h2>
      <p>{word.transcription}</p>
      {!showTranslation ? (
        <button
          ref={buttonRef}
          onClick={handleTranslation}
          className={styles.button}
        >
          Show translation ↪
        </button>
      ) : (
        <p>{word.russian}</p>
      )}
    </div>
  );
};

export default WordCard;
