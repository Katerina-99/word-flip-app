import { makeAutoObservable } from "mobx";

class WordsStore {
  words = [];
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchWords = async () => {
    this.loading = true;
    try {
      const response = await fetch("/api/words");
      const data = await response.json();
      if (!response.ok) throw new Error("Ошибка при загрузке слов");

      this.words = data;
    } catch (err) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  };

  addWord = async (newWord) => {
    this.loading = true;
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
      this.words.push(addedWord);
    } catch (err) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  };

  deleteWord = async (id) => {
    this.loading = true;
    try {
      const response = await fetch(`/api/words/${id}/delete`, {
        method: "POST",
      });
      if (!response.ok) throw new Error("Ошибка при удалении слова");

      this.words = this.words.filter((word) => word.id !== id);
    } catch (err) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  };

  updateWord = async (updatedWord) => {
    this.loading = true;
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
      this.words = this.words.map((word) =>
        word.id === newWord.id ? newWord : word
      );
    } catch (err) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  };
}

const wordsStore = new WordsStore();
export default wordsStore;
