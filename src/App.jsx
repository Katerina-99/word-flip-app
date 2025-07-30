import { Routes, Route } from "react-router";
import WordTable from "./components/WordTable/WordTable";
import WordSlider from "./components/WordSlider/WordSlider";
import Header from "./components/Header/Header";
import "./App.css";
import NotFound from "./components/NotFound/NotFound";
import WordsProvider from "./components/WordsProvider/WordsProvider";

function App() {
  return (
    <WordsProvider>
      <Header />
      <Routes>
        <Route index element={<WordTable />} />
        <Route path="/game" element={<WordSlider initialIndex={1} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </WordsProvider>
  );
}

export default App;
