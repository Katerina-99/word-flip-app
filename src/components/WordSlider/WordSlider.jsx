import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import wordsStore from "../../store/WordsStore";
import WordCard from "../WordCard/WordCard";
import arrow from "../../assets/images/arrowBtn.svg";
import styles from "./WordSlider.module.css";

const WordSlider = observer(({ initialIndex = 0 }) => {
  const { words } = wordsStore;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [studiedCount, setStudiedCount] = useState(0);

  useEffect(() => {
    if (initialIndex >= 0 && initialIndex < words.length) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex, words]);

  if (!words || words.length === 0) {
    return <div className={styles.emptySlider}>Нет слов для отображения.</div>;
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      return prev === 0 ? words.length - 1 : prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      return prev === words.length - 1 ? 0 : prev + 1;
    });
  };

  const handleStudiedCount = () => {
    if (studiedCount < words.length) {
      setStudiedCount((prev) => prev + 1);
    } else {
      setStudiedCount(studiedCount);
    }
  };

  return (
    <>
      <div className={styles.sliderContainer}>
        <button className={styles.arrowBtn} onClick={handlePrev}>
          <img src={arrow} alt="arrowButton" className={styles.arrowImage} />
        </button>
        <WordCard
          key={words[currentIndex].id}
          word={words[currentIndex]}
          onShowTranslation={handleStudiedCount}
        />
        <button
          className={`${styles.arrowBtn} ${styles.buttonNext}`}
          onClick={handleNext}
        >
          <img src={arrow} alt="arrowButton" className={styles.arrowImage} />
        </button>
        <div className={styles.pages}>
          {currentIndex + 1} / {words.length}
        </div>
      </div>
      <div className={styles.studiedWords}>Words studied: {studiedCount}</div>
    </>
  );
});

export default WordSlider;
