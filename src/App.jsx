import { Routes, Route } from "react-router";
import WordTable from "./components/WordTable/WordTable";
import WordSlider from "./components/WordSlider/WordSlider";
import Header from "./components/Header/Header";
import words from "./words";
import "./App.css";

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
      </Routes>
    </>
  );
}

export default App;
