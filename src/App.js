import "./App.css";
import "./hanger.css";
import { React, useState, useEffect } from "react";
import Hanger from "./components/Hanger";
import Word from "./components/Word";
import data from "./API";

function App() {
  const [randomWord, setRandomWord] = useState();
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [counter, setCounter] = useState(0);
  const [showNotLetterError, setShowNotLetterError] = useState("hidden");
  const [showSameLetterError, setShowSameLetterError] = useState("hidden");

  const [callEffect, setCallEffect] = useState("hidden");

  useEffect(() => {
    async function getWords() {
      const res = await data.get("/word?number=100");
      /* setRandomWord(res.data[Math.floor(Math.random() * 10)]); */
      setRandomWord("jabuka");
    }
    getWords();
  }, [callEffect]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key.toLowerCase();

        if (randomWord === undefined) {
        } else if (randomWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          }
        } else if (!randomWord.includes(letter)) {
          if (wrongLetters.includes(letter)) {
            setShowSameLetterError("visible");
            setTimeout(() => {
              setShowSameLetterError("hidden");
            }, 200);
          } else {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
            setCounter((counter) => counter + 1);
          }
        }
      } else {
        setShowNotLetterError("visible");
        setTimeout(() => {
          setShowNotLetterError("hidden");
        }, 200);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [randomWord, wrongLetters]);

  function playAgain() {
    return (
      <div className="play-again">
        <p className="play-agan-paragraph">Play again?</p>
        <button
          className="play-again-button"
          onClick={() => {
            setRandomWord();
            setCorrectLetters([]);
            setWrongLetters([]);
            setCounter(0);
            setCallEffect((call) => call + 1);
          }}
        >
          Yes please!
        </button>
      </div>
    );
  }

  if (!randomWord) {
    return (
      <div className="App">
        <div className="title">
          <h1>Hangman</h1>
          <p>Guess the word - type a letter!</p>
        </div>
        <div className="game-wrapp">
          <Hanger></Hanger>

          <p className="letter">..please wait for your word..</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="title">
          <h1>Hangman</h1>
          <p>Guess the word - type a letter!</p>
        </div>
        <div className="game-wrapp">
          <Hanger counter={counter} playAgain={playAgain}></Hanger>
          <Word randomWord={randomWord} correctLetters={correctLetters} playAgain={playAgain}>
            {" "}
          </Word>
        </div>

        <p style={{ visibility: showNotLetterError, width: "fit-content", margin: "auto", color: "red" }}>Type a letter please!</p>
        <p style={{ visibility: showSameLetterError, width: "fit-content", margin: "auto", color: "red" }}>You already typed that!</p>
        <p style={{ width: "fit-content", margin: "auto", color: "white" }}>
          Wrong letters: &nbsp;
          {wrongLetters.map((e, i) => {
            return `${e}, `;
          })}
        </p>
      </div>
    );
  }
}

export default App;
