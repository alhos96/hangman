import React from "react";

function Word({ randomWord, correctLetters, playAgain }) {
  function checkWin(correct, word) {
    let status = true;

    word.split("").forEach((letter) => {
      if (!correct.includes(letter)) {
        status = false;
      }
    });

    return status;
  }

  return (
    <div className="word-wrapp">
      {randomWord.split("").map((e, i) => {
        return (
          <p className="letter" key={i}>
            {correctLetters.includes(e) ? e : ""}
          </p>
        );
      })}

      {checkWin(correctLetters, randomWord) && playAgain()}
    </div>
  );
}

export default Word;
