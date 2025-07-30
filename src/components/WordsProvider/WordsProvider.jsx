import { useState, useEffect } from "react";
import WordsContext from "../../contexts/WordsContext.js";

const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchWords = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/words");
      const data = await response.json();
      setWords(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <WordsContext.Provider value={{ words, fetchWords, loading }}>
      {children}
    </WordsContext.Provider>
  );
};

export default WordsProvider;
