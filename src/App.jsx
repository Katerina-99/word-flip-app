import WordTable from "./components/WordTable/WordTable";
import WordSlider from "./components/WordSlider/WordSlider";
import words from "./words";
import "./App.css";

function App() {
  return (
    <>
      <WordTable words={words} />
      <WordSlider words={words} initialIndex={1} />
    </>
  );
}

export default App;
