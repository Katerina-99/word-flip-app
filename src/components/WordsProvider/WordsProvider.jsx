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

  const addWord = async (newWord) => {
    setLoading(true);
    try {
      const response = await fetch("/api/words/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWord),
      });
      if (!response.ok) throw new Error("Ошибка при добавлении слова");

      const addedWord = await response.json();
      setWords((words) => [...words, addedWord]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteWord = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/words/${id}/delete`, {
        method: "POST",
      });
      if (!response.ok) throw new Error("Ошибка при удалении слова");

      setWords((words) => words.filter((word) => word.id !== id));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateWord = async (updatedWord) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/words/${updatedWord.id}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedWord),
      });
      if (!response.ok) throw new Error("Ошибка при изменении слова");

      const newWord = await response.json();
      setWords((words) =>
        words.map((word) => (word.id === newWord.id ? newWord : word))
      );
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
    <WordsContext.Provider
      value={{
        words,
        fetchWords,
        loading,
        error,
        addWord,
        deleteWord,
        updateWord,
      }}
    >
      {children}
    </WordsContext.Provider>
  );
};

export default WordsProvider;
