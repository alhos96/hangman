import "./App.css";
import "./hanger.css";
import Hanger from "./components/Hanger";
import Word from "./components/Word";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Hangman</h1>
        <p>Guess the word - type a letter!</p>
      </div>
      <div className="game-wrapp">
        <Hanger></Hanger>
        <Word></Word>
      </div>
    </div>
  );
}

export default App;
