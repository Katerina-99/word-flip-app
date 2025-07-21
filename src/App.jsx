import { Routes, Route } from "react-router";
import WordTable from "./components/WordTable/WordTable";
import WordSlider from "./components/WordSlider/WordSlider";
import Header from "./components/Header/Header";
import words from "./words";
import "./App.css";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<WordTable words={words} />} />
        <Route
          path="/game"
          element={<WordSlider words={words} initialIndex={1} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
