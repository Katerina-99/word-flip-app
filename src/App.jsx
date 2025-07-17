import WordTable from "./components/WordTable/WordTable";
import WordCard from "./components/WordCard/WordCard";
import words from "./words";
import "./App.css";

function App() {
  return (
    <>
      <WordTable />
      <WordCard word={words[0]} />
    </>
  );
}

export default App;
