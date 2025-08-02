import { useEffect } from "react";
import { Routes, Route } from "react-router";
import { Provider } from "mobx-react";
import wordsStore from "./store/WordsStore";
import Header from "./components/Header/Header";
import WordTable from "./components/WordTable/WordTable";
import WordSlider from "./components/WordSlider/WordSlider";
import NotFound from "./components/NotFound/NotFound";
import "./App.css";

function App() {
  const { fetchWords } = wordsStore;

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <Provider store={wordsStore}>
      <Header />
      <Routes>
        <Route index element={<WordTable />} />
        <Route path="/game" element={<WordSlider initialIndex={1} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
}

export default App;
