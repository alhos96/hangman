import React from "react";

function Word({ randomWord, correctLetters }) {
  return (
    <div className="word-wrapp">
      {randomWord.split("").map((e, i) => {
        return (
          <p className="letter" key={i}>
            {correctLetters.includes(e) ? e : ""}
          </p>
        );
      })}
    </div>
  );
}

export default Word;
