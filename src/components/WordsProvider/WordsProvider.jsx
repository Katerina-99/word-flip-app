import { useState, useEffect } from "react";
import WordsContext from "../../contexts/WordsContext.js";

const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWords = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/words");
      const data = await response.json();
      if (!response.ok) throw new Error("Ошибка при загрузке слов");

      setWords(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <WordsContext.Provider value={{ words, fetchWords, loading, error }}>
      {children}
    </WordsContext.Provider>
  );
};

export default WordsProvider;
