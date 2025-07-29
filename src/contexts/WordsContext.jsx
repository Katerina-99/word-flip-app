import { createContext, useState, useEffect } from "react";

export const WordsContext = createContext();

export const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);

  const fetchWords = async () => {
    const response = await fetch("/api/words");
    const data = await response.json();
    setWords(data);
  };

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <WordsContext.Provider value={{ words, fetchWords }}>
      {children}
    </WordsContext.Provider>
  );
};
