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

  const [trigerEffect, setTrigerEffect] = useState(0);
  const [winOrLose, setWinOrLose] = useState(true);

  useEffect(() => {
    if (counter === 5) {
      setWinOrLose(false);
    }
  }, [counter]);

  useEffect(() => {
    async function getWords() {
      const res = await data.get("/word?number=1");
      console.log(res);
      /* setRandomWord(res.data[Math.floor(Math.random() * 10)]); */
      setRandomWord(res.data[0]);
      /* setRandomWord("jabuka");*/
    }
    getWords();
  }, [trigerEffect]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key.toLowerCase();

        if (randomWord === undefined) {
        } else if (randomWord.includes(letter) && counter < 5) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          }
        } else if (!randomWord.includes(letter)) {
          if (wrongLetters.includes(letter)) {
            setShowSameLetterError("visible");
            setTimeout(() => {
              setShowSameLetterError("hidden");
            }, 700);
          } else if (counter < 5) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
            setCounter((counter) => counter + 1);
          } else {
          }
        }
      } else {
        setShowNotLetterError("visible");
        setTimeout(() => {
          setShowNotLetterError("hidden");
        }, 700);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [randomWord, wrongLetters]);

  function playAgain() {
    return (
      <div className="play-again">
        {winOrLose ? (
          <p className="play-agan-paragraph">Well done! Play again?</p>
        ) : (
          <p className="play-agan-paragraph">
            You lost! Play again? <br></br> Correct word was: {randomWord}
          </p>
        )}

        <button
          className="play-again-button"
          onClick={() => {
            setRandomWord();
            setCorrectLetters([]);
            setWrongLetters([]);
            setCounter(0);
            setTrigerEffect((call) => call + 1);
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
